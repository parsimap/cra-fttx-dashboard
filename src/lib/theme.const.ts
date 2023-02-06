import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";

const theme = createTheme(
  {
    direction: "rtl",
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          },
        },
      },
    },
    palette: {
      // primary: {
      //   light: "#7ccad8",
      //   main: "#8C0D22",
      //   dark: "#151348",
      // },
      // secondary: {
      //   main: "#FF7A00",
      //   light: "#FFA95B",
      //   dark: "#E85A02",
      //   contrastText: "#ffffff",
      // },
      // text: {
      //   primary: "#444444",
      // },
    },
    typography: {
      fontFamily: "Vazirmatn, Quicksand",
    },
  },
  faIR
);

export default theme;
