import { Box, Grid, Typography, Button, Divider, Avatar } from "@mui/material";
import { useState,useEffect } from "react";

const Chat = ({ message, loginUser, UserId, time }) => {
  
  const [status, setStatus] = useState('');

  useEffect(()=>{
    loginUser == UserId ? setStatus('outgoing') : setStatus('incoming')
  },[])
  const chatStyle = {
    backgroundColor: status == "outgoing" ? "#42032C" : "#C4C4C4",
    // maxWidth: "50%",
    // minWidth: "10%",
    padding: 1,
    my: 3,
    maxWidth: "calc(60% - 130px)",
    borderRadius: status == "outgoing" ? '10px 10px 0px 10px' : '10px 10px 10px 0px',
    display: 'block',
    marginLeft: status == "outgoing" && "auto",
    marginRight: status == "incoming" && "auto",
    // clear: status == "outgoing" ? "right" : "left",
    color: status == "outgoing" ? "white" : "black",
    
  };
  
  postedTime = time.GetHour() + ' ' + time.getMinutes()
  return (
    <Box sx={chatStyle}>
      <Typography variant="body1">
        {message}
      </Typography>
      <Typography  variant="caption">
        {
          
          postedTime
        
        }
      </Typography>
    </Box>
  );
};

export default Chat;
