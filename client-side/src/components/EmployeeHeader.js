import { Button, Container, Box, Grid, Link, Typography } from "@mui/material";

const EmployeeNavItems = [
  {
    href: "/employee",
    display: "Home",
  },
  {
    href: "/employee/jobs",
    display: "Jobs",
  },
  {
    href: "/employee/messages",
    display: "Messages",
  },
];

export const EmployeeHeader = () => {
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
              <Grid item>
                <Link
                  href={e.href}
                  sx={{
                    fontFamily: "inter",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {e.display}
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Button variant="contained">Post Job</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
