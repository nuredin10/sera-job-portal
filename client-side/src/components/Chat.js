import { Box, Grid, Typography, Button, Divider, Avatar } from "@mui/material";

const Chat = ({ message, status, time }) => {
  const chatStyle = {
    backgroundColor: status == "outgoing" ? "#42032C" : "#C4C4C4",
    maxWidth: "50%",
    minWidth: "150px",
    padding: 1,
    borderRadius: status == "outgoing" ? '10px 10px 0px 10px' : '10px 10px 10px 0px',
    float: status == "outgoing" ? "right" : "left",
    clear: status == "outgoing" ? "left" : "right",
  };
  return (
    <Box sx={chatStyle}>
      <Typography color="black" variant="body1">
        {message}
      </Typography>
      <Typography color="black" variant="caption">
        {time}
      </Typography>
    </Box>
  );
};

export default Chat;
