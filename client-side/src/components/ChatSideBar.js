import { Box, Grid, Typography, Button, Divider, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";


const ChatSideBar = ({usersToChat,setSelectedUser}) => {
  const clientStyle = {
    backgroundColor: "transparent",
    display: "flex",
    py: 2,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "headerBg.main",
    },
  };

  const scrollStyle = { 
    height: "70%", 
    overflow: "hidden", 
    overflowY: "scroll",
    '&::-webkit-scrollbar': {
      width: '0.5em',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.3)',
      outline: 'none',
      borderRadius: '10px'
    }
  };

  const selectChatHandler =(e)=>{
    // console.log("Selected to chat",e)
    setSelectedUser(e.userId);
  }


  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        pt: 3,
        pr: 3,
        borderRadius: 1,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        height: "95vh",
      }}
    >
      <Box
        sx={{
          ml: 3,
          width: "100%",
          display: "flex",

          alignItems: "center",
        }}
      >
        <SearchIcon color="primary" />
        <TextField
          variant="outlined"
          size="small"
          sx={{ width: "85%", ml: "1%", outline: "none" }}
          placeholder="search client..."
        />
      </Box>
      <Divider sx={{ borderColor: "#C4C4C4", my: 3 }} />
      <Typography variant="h6" color="black" sx={{ ml: 3 }}>
        Clients
      </Typography>
      <Divider sx={{ borderColor: "#C4C4C4", mt: 3 }} />
      <Box sx={scrollStyle}>
        {usersToChat.map((e, i) => (
          <Box key={i} onClick={()=>selectChatHandler(e)}>
            <Box sx={clientStyle}>
              <Avatar src={e.Avatar} sx={{ ml: 3 }}></Avatar>
              <Box sx={{ px: 2 }}>
                <Typography variant="subtitle1" color="primary.main">
                  {e.firstName}
                </Typography>
                <Typography variant="caption" color="black">
                  {/* {e.LastMessage} */}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ borderColor: "#C4C4C4" }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ChatSideBar;
