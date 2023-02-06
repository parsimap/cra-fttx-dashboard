import {Button, Divider} from "@mui/material";
import AppBar from "@mui/material/AppBar";

export default function Header() {
  return (
    <AppBar elevation={0} position="sticky">
      <div>Left</div>
      <div>appBar</div>
      <Button>try me</Button>
      <Divider />
      <Button>try me2</Button>
    </AppBar>
  );
}
