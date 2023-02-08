import AppBar from "@mui/material/AppBar";
import simpleLogoImage from "../../../public/simple-logo.png";
import simpleCraLogoImage from "../../../public/simple-cra-logo.png";
import Box from "@mui/material/Box";
import { IconButton, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CellTowerIcon from "@mui/icons-material/CellTower";
import MapWithMarkerIcon from "@/src/components/Icons/MapWithMarkerIcon";
import MapWithOperatorIcon from "@/src/components/Icons/MapWithOperatorIcon";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        pt: 1,
        pb: 1,
        width: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Stack>
        <Box component={"img"} src={simpleCraLogoImage.src} width={50} />
        <Box component={"img"} src={simpleLogoImage.src} width={50} />
      </Stack>
      <Stack>
        <IconButton>
          <HomeIcon />
        </IconButton>
        <IconButton>
          <CellTowerIcon />
        </IconButton>
        <IconButton>
          <MapWithMarkerIcon />
        </IconButton>
        <IconButton>
          <MapWithOperatorIcon />
        </IconButton>
      </Stack>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography fontWeight={"bold"} fontSize={10}>
          به‌روزرسانی:
        </Typography>
        <Typography fontSize={11} fontWeight={"light"}>
          1401/10/10
        </Typography>
      </Stack>
    </AppBar>
  );
}
