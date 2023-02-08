import React from "react";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IHighlightItem from "@/src/interfaces/IHighlightItem";

const HighlightCard = ({ title, subtitle }: IHighlightItem) => (
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
    <Typography variant={"h3"}>{title}</Typography>
    <Typography variant={"subtitle2"}>{subtitle}</Typography>
  </Box>
);

const HighlightCards = ({ data }: { data: IHighlightItem[] }) => (
  <Stack>
    {data.map((item, key) => (
      <HighlightCard
        key={key}
        type={item.type}
        title={item.title}
        amount={item.amount}
        subtitle={item.subtitle}
      />
    ))}
  </Stack>
);

export default HighlightCards;
