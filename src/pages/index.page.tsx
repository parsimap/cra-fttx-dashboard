import Box from "@mui/material/Box";
import { Inter } from "@next/font/google";
import Header from "@/src/components/Header/Header";
import { Container, Stack } from "@mui/material";
import networkPatternImage from "../../public/networkPattern-01.svg";
import networkPatternImage1 from "../../public/networkPattern-01.svg";
import Cards from "@/src/pages/components/Cards";
import Charts from "@/src/pages/components/Charts/Charts";
import React from "react";
import Heading from "@/src/pages/components/Heading";
import Protected from "@/src/components/Protected";

const inter = Inter({ subsets: ["latin"] });

function Page() {
  return (
    <Box display="flex" flexDirection="row" height={"100%"}>
      <Stack
        sx={(theme) => ({
          width: "100%",
          height: "100%",
          background: `url(${networkPatternImage1.src}) center/cover #151348`,
          [theme.breakpoints.down("sm")]: {
            background: `url(${networkPatternImage.src}) center/cover #151348`,
          },
        })}
      >
        <Container maxWidth={"xl"}>
          <Heading />
          <Cards />
          <Charts />
        </Container>
      </Stack>
      <Header />
    </Box>
  );
}

export default function Home() {
  return (
    <Protected>
      <Page />
    </Protected>
  );
}
