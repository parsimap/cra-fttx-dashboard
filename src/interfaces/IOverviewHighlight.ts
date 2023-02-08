type HighlightType =
  | "household-family"
  | "construction-worker"
  | "usb"
  | "money-integral"
  | "sun";

export default interface IOverviewHighlight {
  type: HighlightType;
  title: string;
  subtitle: string;
  amount: string;
}
