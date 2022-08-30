import { Button, Container, Box, Grid, Link, Typography,Avatar } from "@mui/material";

const PostedJob =()=>{
    return(
        <>
            <Box sx={{mt: '3%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography color='info.main' sx={{width: '15%', textAlign: 'center'}}>New</Typography>
                <Box sx={{p: '3%',ml: 'auto', width: '85%', borderRadius: '10px', border: '1px solid #C4C4C4'}}>
                    <Box sx={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <Box sx={{display: 'flex', alignItems: 'center',}}>
                            <Avatar src="../../logo.png"></Avatar>
                            <Typography variant="subtitle1" color="primary" sx={{ml: 1}}>Agency Analytics</Typography>
                        </Box>
                        <Button variant="contained" color="primary" size="small">Apply Now</Button>
                    </Box>
                    <Box sx={{mt: "5%"}}>
                        <Box></Box>
                        <Typography variant="h6" color='text.primary'>UI Designer</Typography>
                        <Typography variant="body1" color='text.secondary'>Marketplace apps similar to olx or bigl but for EU market</Typography>
                        <Typography variant="caption" color='text.disabled'>10 mins ago</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PostedJob