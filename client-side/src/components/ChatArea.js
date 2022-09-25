import { Box, Grid, Typography, Button, Divider, Avatar, InputAdornment } from "@mui/material";
import Chat from "./Chat";
import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const ChatArea = () => {
  const chats = [
    {
        message: "this is to let you know that Im here for you",
        status: "outgoing",
        time: "19:40",
      },
      {
        message: "I kknow we got this",
        status: "incoming",
        time: "19:40",
      },
      {
        message:
          "this is to let you know that Im here for you this is to let this is to let ",
        status: "outgoing",
        time: "19:40",
      },
      {
        message: "what time",
        status: "incoming",
        time: "19:40",
      },
      {
        message: "afternoon",
        status: "outgoing",
        time: "19:40",
      },
      {
        message: "this is to let you know that Im here for you",
        status: "outgoing",
        time: "19:40",
      },
      {
        message: "I kknow we got this",
        status: "incoming",
        time: "19:40",
      },
      {
        message:
          "this is to let you know that Im here for you this is to let this is to let ",
        status: "outgoing",
        time: "19:40",
      },
      {
        message: "what time",
        status: "incoming",
        time: "19:40",
      },
      {
        message: "afternoon",
        status: "outgoing",
        time: "19:40",
      },
    {
      message: "this is to let you know that Im here for you",
      status: "outgoing",
      time: "19:40",
    },
    {
      message: "I kknow we got this",
      status: "incoming",
      time: "19:40",
    },
    {
      message:
        "this is to let you know that Im here for you this is to let this is to let ",
      status: "outgoing",
      time: "19:40",
    },
    {
      message: "what time",
      status: "incoming",
      time: "19:40",
    },
    {
      message: "afternoon",
      status: "outgoing",
      time: "19:40",
    },
  ];

  const styles = theme => ({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.4em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
      }
    }
  });

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        pt: 3,
        px: 3,
        borderRadius: 1,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Avatar src="/logo.png"></Avatar>
        <Box sx={{ ml: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" color="black">
            Sandra Alex
          </Typography>
          <Typography variant="caption" color="black">
            online
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "#C4C4C4", my: 2 }} />
      <Box sx={{mb: 1,  height: "70vh", overflowY: 'scroll'}}>
        {chats.map((e, i) => (
          <Chat message={e.message} status={e.status} time={e.time}></Chat>
        ))}
      </Box>
      <Box>
        <Box
          sx={{
            
            width: "100%",
            display: "flex",

            alignItems: "center",
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            sx={{ width: "95%", outline: "none" }}
            placeholder="search client..."
            InputProps={{endAdornment: (
                <InputAdornment position="start">
                  <SendIcon color="primary" />
                </InputAdornment>
            )}}
          />
          
        </Box>
      </Box>
    </Box>
  );
};

export default ChatArea;
