import { Button, Container, Box, Grid, Link, Typography,Avatar } from "@mui/material";
import Router from 'next/router';
import cookie from 'js-cookie';

const EmployeeNavItems = [
  {
    href: "/employee",
    display: "Home",
  },
  {
    href: "/jobs",
    display: "Jobs",
  },
  {
    href: "/messages",
    display: "Messages",
  },
];

export const EmployeeHeader = ({loginUser,loginRole}) => {

  const linkOnClickHandler = (e) => {

    Router.push({
      pathname: e.href,
      query: { loginUser,loginRole },
    });

  };

  const logoutHandler =()=>{
    cookie.set('token', '')
  }

  return (
    <>
      <Box
        sx={{
          height: 100,
          backgroundColor: "headerBg.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            px: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item sm={12} md={4} lg={4}>
            <Box>
              <Typography variant="h5" color="primary.main">
                LOGO
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{ ml: 15,display: "flex", justifyContent: "space-evenly" }}
            item
            sm={12}
            md={5}
            lg={5}
          >
            {EmployeeNavItems.map((e, i) => (
              <Grid item key={i}>
                <Box
                  onClick={() => linkOnClickHandler(e)}
                  sx={{
                    fontFamily: "inter",
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  {e.display}
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Avatar src='/log.png' href='/profile' sx={{cursor: 'pointer'}}></Avatar>   
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
