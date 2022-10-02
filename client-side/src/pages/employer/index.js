import Head from "next/head";
import Image from "next/image";
import { Box, Grid, Button, Typography } from "@mui/material";
import { EmployerHeader } from "../../components/EmployerHeader";
import { useRouter } from "next/router";
import cookie from "js-cookie";
const Employer = () => {
  // const router = useRouter()
  // const {
  //   query: {loginUser,loginRole}
  // }  = router

  // const props = {
  //   loginUser,loginRole
  // }

  const styles = {
    paperContainer: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/employee-hero-image.jpg")`,
      // backgroundImage: `url('/employee-hero-image.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  };
  const buttonStyle = {
    backgroundColor: "headerBg.main",
    color: "primary.main",
    borderRadius: "5px",
    height: "11%",
    "&:hover": {
      border: 1,
      borderColor: "headerBg.main",
      color: "gray",
      backgroundColor: "transparent",
    },
  };
  const imageStyle = {
    width: "80%",
    height: "100%",
    borderRadius: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  return (
    <>
      <Head>
        <title>Jobs | Sera Job Portal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
            justifyContent: "center",
          }}
        >
          <Grid item lg={12} md={12} sm={12}>
            <EmployerHeader/>
          </Grid>
          
        </Grid>

        <Grid container sx={{ height: "90vh", width: "100%", pt: 5 }}>
          <Grid item lg={6} md={6} sm={12}>
            <Box
              width="90%"
              height="80%"
              sx={{
                m: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography color="black" variant="h2">
                Welcome aboard Employer
              </Typography>
              { <Typography
                sx={{ color: "primary.main", mt: 2, textAlign: "left" }}
                variant="h5"
              >
                Finding Job is Easier Ever
              </Typography> }
              <Typography variant="subtitle2" color="black" sx={{ mt: 2, textAlign: 'center' }}>
                lorem Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.{" "}
              </Typography>
              <Box
                sx={{
                  width: "%",
                  display: "flex",
                  justifyContent: "center",

                  mt: 4,
                }}
              >
                <Button variant="contained" href="/findEmployer">
                  Find Talented Employee's
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Box sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius: '20%'}}>
              <Image
                src="/employee.svg"
                layout="responsive"
                width="400"
                height="300"
              ></Image>
            </Box>
          </Grid>
        </Grid>

        { <Grid container spacing={0}>
          <Grid item lg={12} md={12} sm={12}>
            <EmployerHeader/>
          </Grid>
          <Grid item sx={{width: '100%', height: '70vh'}}>
            <Box style={styles.paperContainer}>
                <Typography variant='h2' sx={{marginBottom: '3%'}}>welcome</Typography>
                <Button variant='contained' sx={buttonStyle}>See Latest Jobs</Button>
            </Box>      
          </Grid>
          <Grid container sx={{backgroundColor: 'white', p: '5%'}}>
            <Grid item lg={6} sm={12} md={12} sx={{my: '5%'}} >
                <img src='/employee-hero-image.jpg' style={imageStyle}></img>
            </Grid>
            <Grid item lg={6} sm={12} md={12} sx={{my: '5%'}}>
                <Typography sx={{p: '5%'}} variant='body1' color="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </Grid>
            <Grid item lg={6} sm={12} md={12} sx={{my: '5%'}}>
                <Typography sx={{p: '5%'}} variant='body1' color="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </Grid>
            <Grid item lg={6} sm={12} md={12} sx={{my: '5%'}}>
                <img src='/employee-hero-image.jpg' style={imageStyle}></img>
            </Grid>
            <Grid item lg={6} sm={12} md={12} sx={{my: '5%'}}>
                <img src='/employee-hero-image.jpg' style={imageStyle}></img>
            </Grid>
            <Grid item lg={6} sm={12} md={12} sx={{my: '5%'}}>
                <Typography sx={{p: '5%'}} variant='body1' color="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </Grid>
            
          </Grid>
        </Grid> }
      </Box>
    </>
  );
};

export default Employer;
