import { Button,Divider, Container, Box, Grid, Link, Typography } from "@mui/material";
import Jobs from "../pages/jobs";
import Image from 'next/image'

const JobsRightSide = () => {
  return (
    <>
      <Box>
        <Box>
          <Typography variant="h6" color="text.primary">
            Overview
          </Typography>
          <Grid container sx={{mt: "5%"}}>
            <Grid item sx={{width: "60%", border: '1px solid #C4C4C4', borderRadius: '10px', m: '1%', p: '5%'}}>
              <Typography variant="caption" color="text.secondary">
                Design and Development
              </Typography>
              <Typography variant="subtitle1" color="text.primary">
                234 Jobs
              </Typography>
            </Grid>
            <Grid item sx={{width: "60%", border: '1px solid #C4C4C4', borderRadius: '10px', m: '1%', p: '5%'}}>
              <Typography variant="caption" color="text.secondary">
                Project Managment
              </Typography>
              <Typography variant="subtitle1" color="text.primary">
                150 Jobs
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ borderColor: "#C4C4C4", mx: 3, my: 3 }}/>
        <Box>
          <Image src="/stay-with-us.svg" layout="responsive" width="500" height="500"/>
        </Box>
        <Divider sx={{ borderColor: "#C4C4C4", mx: 3, my: 3 }}/>
        
      </Box>
    </>
  );
};

export default JobsRightSide;
