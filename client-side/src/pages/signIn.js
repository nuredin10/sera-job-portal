import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  FormGroup,
  Checkbox,
  Box,
  Button,
  Card,
  InputLabel,
  ButtonBox,
  Container,
  Typography,
  Grid,
  DatePicker,
} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

import Router from "next/router";
import cookie from 'js-cookie';

const SignIn = () => {


  const [incorrectMatch, setIncorrectMatch] = useState(false);
  const { register, handleSubmit } = useForm();
  
  const [currentUser, setCurrentUser] = useState();

  const newUser = (user) => {
    axios.post("https://localhost:44369/api/Auth/signin", user)
    .then(function (response) {      
      cookie.set('token', response.data.token)
      cookie.set('loginUser', response.data.user.userId)
      cookie.set('loginRole', response.data.user.role)
      response.data.user.role === "Employee" ? Router.push("/employee") : Router.push("/employer")

      })  
      .catch(function (error) {
        if(error.response.data == "Invalid credentials "){
          setIncorrectMatch(true)
          // console.log("Asdcascdasdcasdcadsc")
        }
        console.log(error.response.data);
      });

  };

  
  return (
    <>
      <Head>
        <title>SignIn | Sera Job Portal</title>
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
          height: "100vh",
          backgroundColor: "background.default",
        }}
      >
        
        <Box sx={{ height: '10%', ml: '5%'}}> 
          <Image src="/seraLogo.jpg" width='100' height='100'></Image>
        </Box>
        <Grid container spacing={4}>
          
          <Grid item lg={6} md={6} sm={12} sx={{mt: '5%'}}>
            <Image src="/login-svg.svg" width="500" height="450"></Image>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 10,
              ml: 15,
            }}
          >
            <form onSubmit={handleSubmit(newUser)}>
              <Grid container spacing={4}>
                <Grid item lg={12} md={12} sm={12}>
                  <Typography variant="h4" color="black">
                    Welcome Back to Sera Job Portal
                  </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="Email"
                    label="Email"
                    type="text"
                    fullWidth
                      {...register("Email")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="Password"
                    label="Password"
                    type="password"
                    fullWidth
                    {...register("Password")}
                  />
                </Grid>
                {incorrectMatch ? (
                  <Grid item lg={12} md={12} sm={12}>
                    <Typography variant="subtitle2" color='red'>Incorrect email or password</Typography>
                  </Grid>
                ) : null}
                <Grid item sx={{ width: "80%" }}>
                  <Button
                    type="submit"
                    size="large"
                    sx={{
                      marginRight: "2rem",
                      width: "40%",
                    }}
                    variant="contained"
                  >
                    Login
                  </Button>
                  <Button sx={{ width: "40%" }} variant="outlined" size="large">
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignIn;
