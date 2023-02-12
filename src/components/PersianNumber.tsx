import React, { PropsWithChildren } from "react";
import isNumber from "is-number";
import { getPersianNumber } from "@/src/lib/utilities/persianNumber";

const PersianNumber = ({
  children,
  ...rest
}: PropsWithChildren<Intl.NumberFormatOptions>) => {
  if (React.isValidElement(children)) throw new Error("Use raw number only");
  if (!isNumber(children)) throw new Error("Only number can be used");
  return <>{getPersianNumber(+children!, rest)}</>;
};

export default PersianNumber;
