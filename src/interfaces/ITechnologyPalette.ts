import { CoverageType } from "../types/CoverageType";

interface IItem {
  title: string;
  palettes: {
    light: string;
    main: string;
    dark: string;
    neutral: string;
  };
}

interface ICoverageType {
  type: CoverageType;
}

export interface ITechnologyPalette extends IItem {}

export interface ITechnologyCoverage extends IItem, ICoverageType {}
