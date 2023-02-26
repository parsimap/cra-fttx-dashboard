import FeatureStack from "@/src/components/FeatureStack";
import Typography from "@mui/material/Typography";
import React from "react";
import PersianNumber from "@/src/components/PersianNumber";

const OperatorRankCard = () => (
  <FeatureStack
    mt={2}
    justifyContent={"center"}
    alignItems={"center"}
    direction={"row"}
  >
    <Typography fontSize={35} fontWeight={"bold"} mr={"auto"}>
      <PersianNumber>10</PersianNumber>
    </Typography>
    <Typography mr={"auto"} color={"#7CCAD8"} fontWeight={300}>
      رتبه اپراتور
    </Typography>
  </FeatureStack>
);

export default OperatorRankCard;
