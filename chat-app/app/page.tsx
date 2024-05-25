"use client"
import useWebSocket from "react-use-websocket"

export default function Home() {
  const {lastMessage , sendMessage}=useWebSocket("ws://localhost:3000")
  const handleClick=()=>{
    sendMessage('hello this is my first message')
  }
  return (
    <div>

      <button className=" m-6  bg-green-500 "  onClick={handleClick}>send message</button>


      {lastMessage? lastMessage.data : "null"}
    </div>
  )}