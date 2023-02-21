import Box from "@mui/material/Box";
import {Stack, Typography} from "@mui/material";
import React from "react";
import GroupStack from "@/src/components/GroupStack";
import PersianNumber from "@/src/components/PersianNumber";

const EXCard = ({amount, group}: { amount: number; group: string }) => (
  <Box
    sx={{
      height: 120,
      borderRadius: 5,
      color: "#ffffff",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      background:
        "linear-gradient(180deg, #2D346C 0%, rgba(0, 73, 181, 0.7) 100%)",
      textAlign: "center",
    }}
  >
    <Typography variant={"subtitle1"}>{group}</Typography>
    <Stack direction={"row"} justifyContent={"center"}>
      <Typography fontSize={30} fontWeight={"bold"}>
        <PersianNumber useGrouping>{amount}</PersianNumber>
      </Typography>
      <Typography fontSize={12}></Typography>
    </Stack>
  </Box>
);

const EXCards = () => (
  <GroupStack>
    <EXCard amount={2000} group={"CpEX"}/>
    <EXCard amount={1200} group={"OpEX"}/>
  </GroupStack>
);

export default EXCards;
