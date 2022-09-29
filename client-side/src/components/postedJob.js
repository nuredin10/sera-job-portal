import { Button, Container, Box, Grid, Link, Typography,Avatar } from "@mui/material";
import Router from 'next/router'

const PostedJob =({job,loginUser,loginRole})=>{


    const applyOnClickHandler=(e)=>{
        const postUser = e.userId
        Router.push({
            pathname: "/messages",
            query: {postUser,loginUser}
          })
        console.log(loginUser)
    }
    return(
        <>
            <Box sx={{mt: '3%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography color='info.main' sx={{width: '15%', textAlign: 'center'}}>New</Typography>
                <Box sx={{p: '3%',ml: 'auto', width: '85%', borderRadius: '10px', border: '1px solid #C4C4C4'}}>
                    <Box sx={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <Box sx={{display: 'flex', alignItems: 'center',}}>
                            <Avatar src="../../logo.png"></Avatar>
                            <Typography variant="subtitle1" color="primary" sx={{ml: 1}}>{job.companyName}</Typography>
                        </Box>
                        {loginRole == "Employee" ? <Button variant="contained" color="primary" size="small" onClick={()=>applyOnClickHandler(job)}>Apply Now</Button> : null}
                    </Box>
                    <Box sx={{mt: "5%"}}>
                        <Box> </Box>
                        <Typography variant="h6" color='text.primary'>{job.jobTitle}</Typography>
                        <Typography variant="body1" color='text.secondary'>{job.jobDescription}</Typography>
                        <Typography variant="caption" color='text.disabled'>{job.postedDate}</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PostedJob