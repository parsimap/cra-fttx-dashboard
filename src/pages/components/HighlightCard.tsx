import React from "react";
import {CardHeader, Typography} from "@mui/material";
import Box from "@mui/material/Box";

interface IProps {
  title: string;
  icon: string;
  subtitle: string;
}

const HighlightCard = ({ title, subtitle }: IProps) => (
  <Box
    sx={{
      borderRadius: 5,
      p: 3,
      width: 250,
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      background:
        "linear-gradient(180deg, #2D346C 0%, rgba(0, 73, 181, 0.7) 100%)",
    }}
  >
    <Typography variant={'h3'}>{title}</Typography>
    <Typography variant={'subtitle2'}>{subtitle}</Typography>
  </Box>
);

export default HighlightCard;
