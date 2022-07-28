import { createTheme } from "@mui/material";
import { red ,grey} from "@mui/material/colors";

const urlElectrolizeFont= "https://fonts.googleapis.com/css2?family=Electrolize&display=swap"


export const darkTheme = createTheme({

  typography: {
    fontFamily: [
      'Electrolize',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    mode: "dark",

    secondary: {
      main: "#f96d00",
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: grey[800] ,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Electrolize';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/electrolize/v14/cIf5Ma1dtE0zSiGSiED7AXEBuI9PQrfA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `,
    },
  },
});
