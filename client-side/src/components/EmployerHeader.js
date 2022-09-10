import { Button, Container, Box, Grid, Link, Typography } from "@mui/material";

const EmployerNavItems = [
  {
    href: "/employer",
    display: "Home",
  },
  {
    href: "/employer/jobs",
    display: "Jobs",
  },
  {
    href: "/employer/messages",
    display: "Messages",
  },
  {
    href: "/employer/findEmployer",
    display: "Find Employer",
  },
];

export const EmployerHeader = () => {
  return (
    <>
      <Box sx={{height: 100, backgroundColor: 'headerBg.main', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
        <Grid container sx={{px: 4,display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Grid 
            item 
            sm={12} 
            md={4}
            lg={4}
            >
            <Box>
              <Typography variant="h5" color='primary.main'>LOGO</Typography>
            </Box>
          </Grid>
          <Grid 
            sx={{ml: 10,display: 'flex', justifyContent: 'space-evenly'}}
            item
            sm={12} 
            md={6}
            lg={6}>
            {EmployerNavItems.map((e, i) => (
              <Grid item key={i}>
                <Link href={e.href} sx={{fontFamily: 'inter', textDecoration: "none", color: 'black'}}>{e.display}</Link>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Button href='postJobs' variant="contained">Post Job</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
