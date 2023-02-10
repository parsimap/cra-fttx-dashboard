import React, { PropsWithChildren } from "react";

const getPersianNumber = (rest: Intl.NumberFormatOptions, children: number) =>
  new Intl.NumberFormat("fa", rest).format(children);

const PersianNumber = ({
  children,
  ...rest
}: PropsWithChildren<Intl.NumberFormatOptions>) => {
  if (React.isValidElement(children)) throw new Error("Use raw number only");
  if (typeof children !== "number") throw new Error("Only number can be used");
  return <>{getPersianNumber(rest, children)}</>;
};

export default PersianNumber;
