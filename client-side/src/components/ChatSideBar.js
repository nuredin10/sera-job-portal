import { Box, Grid, Typography, Button, Divider, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

const Clients = [
  {
    Avatar: "/logo.png",
    Name: "Aura Margart",
    LastMessage: "See you, Good bye!",
  },
  {
    Avatar: "/logo.png",
    Name: "Joakim Anthonio",
    LastMessage: "Hello how are you doing",
  },
  {
    Avatar: "/logo.png",
    Name: "Amela Amanda ",
    LastMessage: "When?",
  },
  {
    Avatar: "/logo.png",
    Name: "Kristian Bastian",
    LastMessage: "Feel free to ask me anything",
  },
  {
    Avatar: "/logo.png",
    Name: "Aura Margart",
    LastMessage: "See you, Good bye!",
  },
  {
    Avatar: "/logo.png",
    Name: "Joakim Anthonio",
    LastMessage: "Hello how are you doing",
  },
  {
    Avatar: "/logo.png",
    Name: "Amela Amanda ",
    LastMessage: "When?",
  },
  {
    Avatar: "/logo.png",
    Name: "Kristian Bastian",
    LastMessage: "Feel free to ask me anything",
  },
];

const ChatSideBar = () => {
  const clientStyle = {
    backgroundColor: "transparent",
    display: 'flex',
    py: 2,
    cursor: 'pointer',
    "&:hover": {
      
      backgroundColor: "headerBg.main",
    },
  };
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        pt: 3,
        pr: 3,
        borderRadius: 1,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        height: '95vh' 
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
      <Box sx={{height: 400,
          overflow: "hidden",
          overflowY: "scroll",}}>
        {Clients.map((e, i) => (
          <>
            <Box sx={clientStyle}>
              <Avatar src={e.Avatar} sx={{ ml: 3 }}></Avatar>
              <Box sx={{ px: 2 }}>
                <Typography variant="body1" color="black">
                  {e.Name}
                </Typography>
                <Typography variant="caption" color="black">
                  {e.LastMessage}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ borderColor: "#C4C4C4", }} />
          </>
        ))}
      </Box>
    </Box>
  );
};

export default ChatSideBar;
