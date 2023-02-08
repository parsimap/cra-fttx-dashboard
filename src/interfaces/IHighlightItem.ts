type HighlightType =
  | "household-family"
  | "construction-worker"
  | "usb"
  | "money-integral"
  | "sun";

export default interface IHighlightItem {
  type: HighlightType;
  title: string;
  subtitle: string;
  amount: string;
}
