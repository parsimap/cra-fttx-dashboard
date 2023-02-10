import React from "react";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ConstructionWorkerIcon from "@/src/components/Icons/ConstructionWorkerIcon";
import HouseholdFamilyIcon from "@/src/components/Icons/HouseholdFamilyIcon";
import MoneyIntegralIcon from "@/src/components/Icons/MoneyIntegralIcon";
import SunIcon from "@/src/components/Icons/SunIcon";
import UsbIcon from "@/src/components/Icons/UsbIcon";
import PersianNumber from "@/src/components/PersianNumber";

type IconType =
  | "household-family"
  | "construction-worker"
  | "usb"
  | "money-integral"
  | "sun";

interface ICardProps {
  icon: IconType;
  title: string;
  subtitle: string;
  amount: JSX.Element;
}

const Icon = ({ value }: { value: IconType }) => {
  switch (value) {
    case "construction-worker":
      return <ConstructionWorkerIcon />;
    case "household-family":
      return <HouseholdFamilyIcon />;
    case "money-integral":
      return <MoneyIntegralIcon />;
    case "sun":
      return <SunIcon />;
    case "usb":
      return <UsbIcon />;
    default:
      return <></>;
  }
};

const Card = ({ title, subtitle, amount, icon }: ICardProps) => (
  <Box
    sx={{
      p: 3,
      width: 250,
      borderRadius: 5,
      color: "#ffffff",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      background:
        "linear-gradient(180deg, #2D346C 0%, rgba(0, 73, 181, 0.7) 100%)",
      textAlign: "center",
    }}
  >
    <Typography variant={"h3"}>{title}</Typography>
    <Stack direction={"row"}>
      <Typography variant={"body2"}>{amount}</Typography>
      <Icon value={icon} />
    </Stack>
    <Typography variant={"subtitle2"}>{subtitle}</Typography>
  </Box>
);

const Cards = () => (
  <>
    <Card
      amount={<PersianNumber useGrouping>203168</PersianNumber>}
      subtitle={"خانوار"}
      icon={"construction-worker"}
      title={"تعداد خانوار تحت پوشش"}
    />
    <Card
      amount={<PersianNumber useGrouping>203168</PersianNumber>}
      subtitle={"خانوار"}
      icon={"construction-worker"}
      title={"تعداد خانوار تحت پوشش"}
    />
    <Card
      amount={<PersianNumber useGrouping>203168</PersianNumber>}
      subtitle={"خانوار"}
      icon={"construction-worker"}
      title={"تعداد خانوار تحت پوشش"}
    />
    <Card
      amount={<PersianNumber useGrouping>203168</PersianNumber>}
      subtitle={"خانوار"}
      icon={"construction-worker"}
      title={"تعداد خانوار تحت پوشش"}
    />
  </>
);

export default Cards;
