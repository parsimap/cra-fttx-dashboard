import {
  useAuthenticationQuery,
  useLazyGetBaseDataQuery,
} from "@/src/features/craApiSlice";
import { PropsWithChildren, useEffect } from "react";
import { QueryStatus } from "@reduxjs/toolkit/query";
import { appSelector, useAppDispatch } from "@/src/app/hooks";
import {
  coveragesChanged,
  technologiesChanged,
  tokenChanged,
} from "@/src/features/appSlice";
import IGetBaseResult, {
  IIndicatorPalette,
} from "@/src/interfaces/IGetBaseResult";
import { CoverageType } from "@/src/types/CoverageType";
import ITechnology from "@/src/interfaces/ITechnology";
import ICoverage from "@/src/interfaces/ICoverage";
import { useSelector } from "react-redux";

function getTechnologies(data: IGetBaseResult["ResultObject"]["Technologies"]) {
  const result: ITechnology[] = [];

  for (const item of data) {
    result.push({
      title: item.title,
      palettes: {
        light: item.Paletts[0],
        main: item.Paletts[1],
        dark: item.Paletts[2],
        neutral: item.Paletts[4],
      },
    });
  }

  return result;
}

function getCoverages({
  CoveragesPalette,
  ClientsPalette,
  PassivePalette,
}: IGetBaseResult["ResultObject"]) {
  const result: ICoverage[] = [];

  const data: Record<string, IIndicatorPalette> = {
    client: ClientsPalette,
    coverage: CoveragesPalette,
    "passive-port": PassivePalette,
  };

  for (const key in data) {
    result.push({
      type: key as CoverageType,
      title: data[key].Name,
      palettes: {
        light: data[key].Palette[0],
        main: data[key].Palette[1],
        dark: data[key].Palette[2],
        neutral: data[key].Palette[4],
      },
    });
  }

  return result;
}

// const extractPalettes = ({
//   ClientsPalette,
//   CoveragesPalette,
//   PassivePalette,
//   Technologies,
// }: IGetBaseResult["ResultObject"]) => {
//   const result = [] as ITechnologyData[];
//   const indicators: Record<string, IIndicatorPalette> = {
//     client: ClientsPalette,
//     coverage: CoveragesPalette,
//     "passive-port": PassivePalette,
//   };
//
//   for (const technology of Technologies) {
//     result.push({
//       title: technology.title,
//       palettes: {
//         light: technology.Paletts[0],
//         main: technology.Paletts[1],
//         dark: technology.Paletts[2],
//         neutral: technology.Paletts[4],
//       },
//     });
//   }
//
//   for (const key in indicators) {
//     result.push({
//       type: key as CoverageType,
//       title: indicators[key].Name,
//       palettes: {
//         light: indicators[key].Palette[0],
//         main: indicators[key].Palette[1],
//         dark: indicators[key].Palette[2],
//         neutral: indicators[key].Palette[4],
//       },
//     });
//   }
//
//   return result;
// };

const Protected = ({ children }: PropsWithChildren) => {
  const { data: authData, status: authStatus } = useAuthenticationQuery(null);
  const [triggerBaseData, baseDataResult] = useLazyGetBaseDataQuery();
  const { technologies, coverages } = useSelector(appSelector);
  const isFinished = [technologies.length, coverages.length].every((x) => x);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authStatus === QueryStatus.fulfilled) {
      triggerBaseData(authData!.token);
      dispatch(tokenChanged(authData!.token));
    }
  }, [authData, authStatus, dispatch, triggerBaseData]);

  useEffect(() => {
    if (baseDataResult.data) {
      const { ResultObject } = baseDataResult.data;
      const technologies = ResultObject.Technologies;
      dispatch(coveragesChanged(getCoverages(ResultObject)));
      dispatch(technologiesChanged(getTechnologies(technologies)));
    }
  }, [baseDataResult.data, dispatch]);

  return isFinished ? <>{children}</> : <></>;
};

export default Protected;
