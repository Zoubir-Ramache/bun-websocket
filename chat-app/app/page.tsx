"use client";
import useWebSocket from "react-use-websocket";
import { Input } from "@/components/ui/input";
import { BsSendFill } from "react-icons/bs";
import Message from "@/components/shared/message";
import { useEffect, useState } from "react";
export default function Home() {
  const [messageList, setMassageList] = useState<string[]>([]);
  const { lastMessage, sendMessage } = useWebSocket("ws://localhost:3000");
  const [MyMessage, setMyMessage] = useState<string>("");
  const handleClick = () => {
    sendMessage(MyMessage);
  };
  useEffect(()=>{
    
    setMassageList((prev)=>[...prev , lastMessage?.data])
    console.log(messageList);
    
  }  ,[lastMessage])
  return (
    <div className=" w-full  h-screen overflow-x-hidden overflow-y-scroll relative ">
      {messageList.map((m, index) => (
        <Message recieved content={m} key={`${m}${index}`}  />
      ))}
      {lastMessage ? lastMessage.data : "null"}
      <div className=" flex  items-center   shadow-sm  fixed border-t-2 border-primary bg-accent  rounded-lg   w-full bottom-0  ">
        <Input
          placeholder="type something"
          value={MyMessage}
          onChange={(e) => setMyMessage(e.target.value)}
        />
        <button className=" m-6  " onClick={handleClick}>
          <BsSendFill className=" text-primary" size={30} />
        </button>
      </div>
    </div>
  );
}
