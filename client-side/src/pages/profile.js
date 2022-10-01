import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";
import Head from "next/head";
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
import { EmployerHeader } from "../components/EmployerHeader";

const Profile = () => {
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
          //   pt: '3%'
        }}
      >
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12}>
            <EmployerHeader />
          </Grid>
          <Grid item lg={9} sm={8}>
            <Box
              sx={{
                borderRadius: "10px",
                backgroundColor: "background.paper",
                pr: "5%",
                // pt: "5%",
                mr: "3%",
                mt: "-5%",
                boxShadow: "rgba(0, 0, 0, 0.10) 0px 5px 5px",
              }}
            >
              <Grid container sx={{ mt: "5%" }}>
                <Grid
                  item
                  sx={{ width: "60%", borderRadius: "10px", m: "1%", p: "5%" }}
                >
                  <Typography variant="h3" color="text.primary">
                    John Doe
                  </Typography>
                  <Typography variant="caption" color="text.primary">
                    <LocationOnIcon /> Addis Ababa
                  </Typography>

                  <Grid container sx={{ mt: "5%" }}>
                    <Grid
                      item
                      sx={{
                        width: "auto",
                        borderRadius: "6px",
                        m: "1%",
                        p: "3%",
                        backgroundColor: "#42032C",
                      }}
                    >
                      <Typography variant="subtitle1" color="text.silver">
                        Flutter Mobile Development
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        width: "auto",
                        borderRadius: "6px",
                        m: "1%",
                        p: "3%",
                        backgroundColor: "#42032C",
                      }}
                    >
                      <Typography variant="subtitle1" color="text.silver">
                        Windows Game Development
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        width: "auto",
                        borderRadius: "6px",
                        m: "1%",
                        p: "3%",
                        backgroundColor: "#42032C",
                      }}
                    >
                      <Typography variant="subtitle1" color="text.silver">
                        Data Science with PyTorch
                      </Typography>
                    </Grid>
                  </Grid>

                  <br />
                  <Typography variant="p" color="text.primary">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>

                  <Grid container spacing={5} sx={{ mt: 2 }}>
                    <Grid item xs={2}>
                      <Typography variant="h6" color="text.primary">
                        $50.00
                      </Typography>
                      <Typography variant="p" color="text.secondary">
                        Hourly rate
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h6" color="text.primary">
                        23
                      </Typography>
                      <Typography variant="p" color="text.secondary">
                        Jobs
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h6" color="text.primary">
                        4.5 /5.0
                      </Typography>
                      <Typography variant="p" color="text.secondary">
                        Rating
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h6" color="text.primary">
                        293
                      </Typography>
                      <Typography variant="p" color="text.secondary">
                        Hours worked
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item lg={3} sm={3} sx={{ mt: "1.5%", ml: "0" }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" color="text.primary">
                Availability
              </Typography>
              <br />
              <Typography variant="p" color="text.primary">
                More than 30/hr a week
              </Typography>
              <Divider sx={{ borderColor: "#C4C4C4", mx: 3, my: 3 }} />
              /** */
              <Typography variant="h5" color="text.primary">
                Profile Link
              </Typography>
              <br />
              <Grid
                item
                sx={{
                  width: "fit-content",
                  textAlign: "center",
                  borderRadius: "3px",
                  border: "1px solid gainsboro",
                  p: "3%",
                }}
              >
                <Typography variant="p" color="text.secondary">
                  https:sera-jobs/employee/abdella
                </Typography>
              </Grid>
              <Typography variant="link" color="#D36B00">
                Copy Link
              </Typography>
              <Divider sx={{ borderColor: "#C4C4C4", mx: 3, my: 3 }} />
              /** */
              <Typography variant="h5" color="text.primary">
                Language
              </Typography>
              <br />
              <Typography variant="p" color="text.primary" fontSize="20px">
                English:{" "}
                <Typography variant="subtitle" color="text.secondary">
                  Fluent
                </Typography>
              </Typography>
              <br />
              <Typography variant="p" color="text.primary" fontSize="20px">
                Amharic:{" "}
                <Typography variant="subtitle" color="text.secondary">
                  Fluent
                </Typography>
              </Typography>
              <Divider sx={{ borderColor: "#C4C4C4", mx: 3, my: 3 }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
