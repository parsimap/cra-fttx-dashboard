import { Box } from "@mui/material";
import React from "react";
import chart from "../../../../public/left-charts.svg";

const LeftCharts = () => (
  <Box component={"img"} width={"100%"} src={chart.src} mt={2} />
);

export default LeftCharts;
