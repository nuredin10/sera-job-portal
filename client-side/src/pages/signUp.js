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

const SignUp = () => {
  return (
    <>
      <Head>
        <title>SignUp | Sera Job Portal</title>
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
          p: 5,
          backgroundColor: "background.default",
        }}
      >
        <Box sx={{border: '1px solid red', width: '60%', height: '100vh'}}>

        </Box>
      </Box>
    </>
  );
};


export default SignUp