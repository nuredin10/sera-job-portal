import Head from "next/head";
import Image from "next/image";
import { EmployerHeader } from "../components/EmployerHeader";
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
import Router from "next/router";
import Link from "@mui/material/Link";
import axios from "axios";
import { useForm } from 'react-hook-form'
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import cookie from 'js-cookie'

const PostJob = () => {

  const loginUser = cookie.get("loginUser")
  
  const { register, handleSubmit } = useForm();
  const [jobType, setJobType] = useState('')
  
  const handleChangeJobType=(e)=>{
    setJobType(e.target.value)
  }
  const newJob = (job) => {

    var datetime = new Date().toJSON();
    const postedJob = {
      ...job,
      JobType: jobType,
      userId: loginUser,
      PostedDate: datetime
    }

    const config ={
      headers: {
        Authorization: "Bearer " + cookie.get("token"),
      }
    }

    // console.log(postedJob,config)
    axios.post("https://localhost:44369/jobs/postJob", postedJob, config)
      .then(function (response) {
        console.log(response.data,"sfvsdfvsdf")
        Router.push('/jobs')
      })
      .catch(function (error) {
        console.log(error.message);
        
      });
  };


  return (
    <>
      <Head>
        <title>Post Jobs | Sera Job Portal</title>
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
          height: "160vh",
          backgroundColor: "background.default",
        }}
      >
        <Grid container spacing={3} sx={{ backgroundColor: "primary.paper" }}>
        <Grid item lg={12} md={12} sm={12}>
            <EmployerHeader/>
          </Grid>
          <Grid>
            <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
              sx={{
                pt: "5%",
                height: "50vh",
                width: "100vw",
                backgroundColor: "primary.main",
              }}
            >
              <Box
                sx={{
                  px: "10%",
                  pb: '5%',
                  height: "auto",
                  width: "70%",
                  backgroundColor: "background.paper",
                  border: 1,
                  margin: "auto",
                  borderRadius: "14px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
                }}
              >
                <Typography
                  variant="h4"
                  color="black"
                  textAlign="center"
                  my="5%"
                >
                  Fill out the form
                </Typography>
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
                <form onSubmit={handleSubmit(newJob)}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="JobTitle"
                        label="Job Title"
                        type="text"
                        fullWidth
                        {...register("JobTitle")}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        name="CompanyName"
                        label="Company Name"
                        type="text"
                        fullWidth
                        {...register("CompanyName")}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="JobPrice"
                        label="Price"
                        type="text"
                        fullWidth
                        {...register("JobPrice")}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="JobDescription"
                        label="Description"
                        type="text"
                        fullWidth
                        {...register("JobDescription")}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Job Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="JobType"
                          value={jobType}
                          label="Job Type"
                          onChange={handleChangeJobType}
                        >
                          <MenuItem value="Full Time">Full-Time</MenuItem>
                          <MenuItem value="Part Time">Part-Time</MenuItem>
                          <MenuItem value="Freelance">Freelance</MenuItem>
                          <MenuItem value="Remote">Remote</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="Location"
                        label="Location"
                        type="text"
                        fullWidth
                        {...register("Location")}
                      />
                    </Grid>
                    
                    <Grid item>
                      <Button
                        type="submit"
                        sx={{ marginRight: "2rem" }}
                        variant="contained"
                      >
                        Post
                      </Button>
                      <Button variant="outlined">Cancel</Button>
                    </Grid>
                  </Grid>
                </form>
                {/* </LocalizationProvider> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PostJob;
