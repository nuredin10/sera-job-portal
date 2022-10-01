import {
  Box,
  Grid,
  IconButton,
  Typography,
  Button,
  Divider,
  Avatar,
  InputAdornment,
} from "@mui/material";
import Chat from "./Chat";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
// import Picker from "emoji-picker-react";
import { useState, useEffect, useRef } from "react";
import MoodIcon from "@mui/icons-material/Mood";
import { useForm } from "react-hook-form";
import axios from "axios";

const ChatArea = (props) => {
  const chatStyle = {
    mb: 1,
    // border: '1px solid red',
    pr: 3,
    height: "70vh",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.5em",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      outline: "none",
      borderRadius: "10px",
    },
  };

  const [userToChat, setUserToChat] = useState();

  // const [value, setValue] = useState("");
  // const [message, setMessage] = useState("");
  const { register, handleSubmit, reset } = useForm();
  // const [chosenEmoji, setChosenEmoji] = useState(null);
  // const [emojiSelector, setEmojiSelector] = useState(false);

  // const onEmojiClick = (event, emojiObject) => {
  //   setChosenEmoji(emojiObject);
  // };

  const emojiOnClickHandler = () => {
    // setEmojiSelector(emoji=>!emoji);
  };
  // const messageOnChangeHandler =(e)=>{
  //   setValue(e.target.value);
  //   // console.log(value)

  // }

  // const handleKeyDown = event => {
  //   if (event.key === 'Enter') {
  //     sendHandler();
  //   }
  // };

  const sendHandler = (text) => {
    // var currentdate = new Date();
    var datetime = new Date().toJSON(); /* = currentdate.getFullYear()+ "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate()   
                + currentdate.getHours()    + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds(); */

    const message = {
      ...text,
      Time: datetime,
      UserId: props.loginUser,
      ToUserId: props.postUser.toString(),
    };

    reset();

    console.log(message);
    props.connection
      .invoke(
        "SendMessage",
        text.messageText,
        message.Time,
        message.UserId,
        message.ToUserId
      )
      .catch(function (res) {
        console.log(res);
      });
  };

  const myRef = useRef(null);
  const scrollToMyRef = () => {
    if (myRef.current) {
      myRef.current.scrollTop = myRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToMyRef();
  }, [props.messages]);

  useEffect(() => {
    const req = {
      UserId: props.postUser,
    };

    axios
      .post("https://localhost:44369/api/User/FindUserById", req)
      .then(function (res) {
        setUserToChat(res.data[0]);
      })
      .catch(function (res) {
        console.log(res);
      });
  }, [props.postUser]);

  // console.log("to user", props.postUser)

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
          {userToChat && (
            <Typography variant="subtitle1" color="black">
              {userToChat.firstName + " " + userToChat.middleName}
            </Typography>
          )}

          <Typography variant="caption" color="black">
            online
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "#C4C4C4", my: 2 }} />
      <Box sx={chatStyle} ref={myRef}>
        {props.messages &&
          props.messages.map((e, i) => {
            () =>
              e.UserId == props.loginUser
                ? console.log("outgoing")
                : console.log("incoming");

            return (
              <Chat
                key={i}
                message={e.messageText}
                time={e.time}
                loginUser={props.loginUser}
                UserId={e.userId}
              ></Chat>
            );
          })}
      </Box>
      <Box>
        <form onSubmit={handleSubmit(sendHandler)}>
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
              name="messageText"
              sx={{ width: "95%", outline: "none" }}
              placeholder="search client..."
              // value={value}
              // onChange={messageOnChangeHandler}
              // onKeyDown={handleKeyDown}
              {...register("messageText")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    {/* {emojiSelector? <Picker onEmojiClick={onEmojiClick} /> : null} */}
                    <IconButton>
                      <MoodIcon onClick={emojiOnClickHandler} color="primary" />
                    </IconButton>
                    <IconButton>
                      <SendIcon onClick={sendHandler} color="primary" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ChatArea;
