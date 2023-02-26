import {createTheme} from "@mui/material/styles";
import {faIR} from "@mui/material/locale";

const theme = createTheme(
  {
    direction: "rtl",
    components: {
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontSize: "2em",
          },
          h2: {
            fontSize: "1.5em",
          },
          h3: {
            fontSize: "1.17em",
          },
          h4: {
            fontSize: "1em",
          },
        },
      },
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
      primary: {
        light: "#7ccad8",
        main: "#2D346C",
        dark: "#151348",
      },
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
      fontFamily: "Vazirmatn FD, Quicksand",
    },
  },
  faIR
);

export default theme;
