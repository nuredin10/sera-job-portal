import "../styles/globals.css";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Layout from "../components/Layout";
import cookie from 'js-cookie'
import Router from "next/router";
function MyApp({ Component, pageProps}) {

  const token = cookie.get('token');
  console.log(token)


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Layout> */}
          
          <Component {...pageProps} />
        {/* </Layout> */}
      </ThemeProvider>
    </>
  );
}


export default MyApp;
