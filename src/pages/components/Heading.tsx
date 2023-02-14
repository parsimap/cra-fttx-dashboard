import {Property} from "csstype";
import TextEmphasisPosition = Property.TextEmphasisPosition;
import Box from "@mui/material/Box";
import sweetTaste from "@/public/tam_shirin_logo.svg";
import {Typography} from "@mui/material";
import GroupStack from "@/src/pages/components/GroupStack";
import React from "react";

const Heading = () => (
  <GroupStack>
    <Box
      ml={"auto"}
      width={130}
      component={"img"}
      src={sweetTaste.src}
    />
    <Typography variant={"h5"} sx={{ color: "#F7941D", ml: "auto" }}>
      داشبورد مدیریتی طرح ملی فیبر نوری منازل و کسب و کارها
    </Typography>
  </GroupStack>
);

export default Heading;
