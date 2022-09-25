import Head from "next/head";
import Image from "next/image";
import { EmployerHeader } from "../../components/EmployerHeader";
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

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { useForm } from "react-hook-form";
import Router from "next/router";
import Link from "@mui/material/Link";

const PostJob = () => {
  const handleSubmit = () => {
    console.log("asd");
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
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <EmployerHeader />
            {/* <EmployeeHeader /> */}
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
                  borderRadius: "15px",
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
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="JobTitle"
                        label="Job Title"
                        type="text"
                        fullWidth
                        // {...register("finished_name")}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        name="CompanyName"
                        label="Company Name"
                        type="text"
                        fullWidth
                        // {...register("finished_spec")}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="JobPrice"
                        label="Price"
                        type="text"
                        fullWidth
                        // {...register("finished_quantity")}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="JobDescription"
                        label="Description"
                        type="text"
                        fullWidth
                        // {...register("finished_description")}
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
                          value="Job Type"
                          label="Job Type"
                          // onChange={handleChange}
                        >
                          <MenuItem value={10}>Full-Time</MenuItem>
                          <MenuItem value={20}>Part-Time</MenuItem>
                          <MenuItem value={30}>Freelance</MenuItem>
                          <MenuItem value={40}>Remote</MenuItem>
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
                        // {...register("finished_materialunit")}
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
