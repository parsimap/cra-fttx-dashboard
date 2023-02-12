import { Stack, StackProps } from "@mui/material";

const GroupStack = (props: StackProps) => (
  <Stack
    pt={2}
    direction={"row"}
    alignItems={"center"}
    justifyContent={"space-between"}
    {...props}
  />
);

export default GroupStack;
