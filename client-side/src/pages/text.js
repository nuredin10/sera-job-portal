import React,{useState,useEffect} from 'react'
import * as SignalR from "@microsoft/signalr"

const text = () => {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");
    const [myConnectionId, setMyConnectionId] = useState('nothing')

    const connection = new SignalR.HubConnectionBuilder()
    .withUrl("https://localhost:44369/ChatHub")
    .build()

    connection.start().then(function(){
        connection.invoke("GetConnectionId").then(function(id){
          setMyConnectionId(id)
        }).catch(function (err) {
        return console.error(err.toString());
    })
      });
    connection.on("ReceiveMessage",function(message){
        setMessage(message)
    })

    
    
    const onClickHandler=()=>{
        connection.invoke("SendMessage",value)
        .catch(function(res){
            console.log(res)
        })
        connection.invoke("GetConnectionId",function(res){
            setMyConnectionId(res);
        })
        console.log("clicked")
    }
  return (
    <div>
        
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <h3>{message}</h3>
        <button onClick={onClickHandler}>Submit</button>
        <h4>{myConnectionId}</h4>
    </div>
  )
}

export default text