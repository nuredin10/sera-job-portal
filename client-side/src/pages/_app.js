import "../styles/globals.css";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
