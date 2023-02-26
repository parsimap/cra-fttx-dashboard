import { Container, Stack } from "@mui/material";
import networkPatternImage1 from "@/public/networkPattern-01.svg";
import networkPatternImage from "@/public/networkPattern-01.svg";
import LeftNavigationBar from "@/src/components/LeftNavigationBar/LeftNavigationBar";
import Box from "@mui/material/Box";
import React, { PropsWithChildren } from "react";
import Heading from "@/src/pages/components/Heading";
import { ThemeModeType } from "@/src/types/ThemeModeType";

const getBackground = (mode: ThemeModeType) =>
  mode !== "light"
    ? `url(${networkPatternImage1.src}) center/cover #151348`
    : "#ffffff";

const getMobileBackground = (mode: ThemeModeType) =>
  mode !== "light"
    ? `url(${networkPatternImage.src}) center/cover #151348`
    : "#ffffff";

const Layout = ({
  children,
  mode,
  scrollable = false,
}: PropsWithChildren<{ mode: ThemeModeType; scrollable?: boolean }>) => (
  <LeftNavigationBar />
  // <Box
  //   display="flex"
  //   flexDirection="row"
  //   height={"100%"}
  //   overflow={scrollable ? "auto" : "none"}
  // >
  //   <Stack
  //     sx={(theme) => ({
  //       width: "100%",
  //       height: "100%",
  //       background: getBackground(mode),
  //       [theme.breakpoints.down("sm")]: {
  //         background: getMobileBackground(mode),
  //       },
  //     })}
  //   >
  //     {/*<Container maxWidth={"xl"}>*/}
  //     {/*  <Heading mode={mode} mb={5} />*/}
  //     {/*  {children}*/}
  //     {/*</Container>*/}
  //     <LeftNavigationBar />
  //   </Stack>
  // </Box>
);

export default Layout;
