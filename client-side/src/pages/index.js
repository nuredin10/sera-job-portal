import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { EmployerHeader } from "../components/EmployerHeader";
import { EmployeeHeader } from "../components/EmployeeHeader";
import { Container } from "@mui/system";
import { Box, Grid, Typography, Button, Avatar } from "@mui/material";
import { useEffect } from "react";

export default function Home({}) {
  const type = "wsergwergwer";

  return (
    <>
      <Head>
        <title>Home | Sera Job Po</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box
        component="main"
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "background.default",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item lg={3} md={2} sm={2} ml={7}>
            <img src="/seraLogo.jpg" width='20%' ></img>
          </Grid>
          <Grid itm lg={1} sm={2} md={2}>
            <Button href="/signIn" variant="contained" size="small">
              Sign In
            </Button>
          </Grid>
        </Grid>

        <Grid container sx={{ height: "90vh", width: "100%", pt: 5 }}>
          <Grid item lg={6} md={6} sm={12}>
            <Box
              width="80%"
              height="80%"
              sx={{
                m: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography color="black" variant="h1">
                App That Will Make Your Life So Much Easier
              </Typography>
              <Typography
                sx={{ color: "primary.main", mt: 2, textAlign: "left" }}
                variant="h5"
              >
                Finding Job is Easier Ever
              </Typography>
              <Typography variant="subtitle2" color="black" sx={{ mt: 2 }}>
                lorem Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium heeeloo sakpdhwoqhdo doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.{" "}
              </Typography>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 4,
                }}
              >
                <Button variant="contained" href='/signIn'>Get Started</Button>
                <Button variant="outlined" href='/signUp'>Register</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Box sx={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius: '23%'}}>
              <Image
                src="/homepage.svg"
                layout="responsive"
                width="400"
                height="300"
              ></Image>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ p: 6 }}>
          <Grid item lg={12} md={12} sm={12} sx={{my: 5}}>
            <Typography variant="h2" color="black">
              Services We Provide For You
            </Typography>
            <Typography color="black">
              There are many recruiters and employees on this app, Expand your
              network
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <Grid container spacing={4}>
              <Grid item lg={4} md={6} sm={12}>
                <Box sx={{ p: '7%', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: '8%'}}>
                  <Avatar src='/logo.png' width='1%' height="1%"></Avatar>
                  <Typography color="black" variant="h6" my={2}>
                    Web Development
                  </Typography>
                  <Typography mb={3} variant="subtitle2" color="black">lorem Seed ut perspiciatis under loomis omnis perspiciatis under omnis iste natus.</Typography>
                  <Typography variant='caption' color="black">Learn more</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <Box sx={{ p: '7%', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: '8%'}}>
                  <Avatar src='/logo.png' width='1%' height="1%"></Avatar>
                  <Typography color="black" variant="h6" my={2}>
                    Web Development
                  </Typography>
                  <Typography mb={3} variant="subtitle2" color="black">lorem Seed ut perspiciatis under loomis omnis perspiciatis under omnis iste natus.</Typography>
                  <Typography variant='caption' color="black">Learn more</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <Box sx={{ p: '7%', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: '8%'}}>
                  <Avatar src='/logo.png' width='1%' height="1%"></Avatar>
                  <Typography color="black" variant="h6" my={2}>
                    Web Development
                  </Typography>
                  <Typography mb={3} variant="subtitle2" color="black">lorem Seed ut perspiciatis under loomis omnis perspiciatis under omnis iste natus.</Typography>
                  <Typography variant='caption' color="black">Learn more</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <Box sx={{ p: '7%', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: '8%'}}>
                  <Avatar src='/logo.png' width='1%' height="1%"></Avatar>
                  <Typography color="black" variant="h6" my={2}>
                    Web Development
                  </Typography>
                  <Typography mb={3} variant="subtitle2" color="black">lorem Seed ut perspiciatis under loomis omnis perspiciatis under omnis iste natus.</Typography>
                  <Typography variant='caption' color="black">Learn more</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <Box sx={{ p: '7%', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: '8%'}}>
                  <Avatar src='/logo.png' width='1%' height="1%"></Avatar>
                  <Typography color="black" variant="h6" my={2}>
                    Web Development
                  </Typography>
                  <Typography mb={3} variant="subtitle2" color="black">lorem Seed ut perspiciatis under loomis omnis perspiciatis under omnis iste natus.</Typography>
                  <Typography variant='caption' color="black">Learn more</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <Box sx={{ p: '7%', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: '8%'}}>
                  <Avatar src='/logo.png' width='1%' height="1%"></Avatar>
                  <Typography color="black" variant="h6" my={2}>
                    Web Development
                  </Typography>
                  <Typography mb={3} variant="subtitle2" color="black">lorem Seed ut peefesfvesrspiciatis under loomis omnis perspiciatis under omnis iste natus.</Typography>
                  <Typography variant='caption' color="black">Learn more</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
