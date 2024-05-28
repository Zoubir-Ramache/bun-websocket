"use client";
import useWebSocket from "react-use-websocket";
import { Input } from "@/components/ui/input";
import { BsSendFill } from "react-icons/bs";
import Message from "@/components/shared/message";
import { useEffect, useState } from "react";

import { MessageValidationSchema } from "@/lib/validation";
export default function Home() {
  const [messageList, setMassageList] = useState<string[]>([]);
  const { lastMessage, sendMessage } = useWebSocket("ws://localhost:3000");
  const [MyMessage, setMyMessage] = useState<string>("");
  const handleClick = () => {
    sendMessage(MyMessage);
  };
  useEffect(() => {
    if(lastMessage)
    setMassageList((prev) => [...prev, lastMessage?.data]);
    
  }, [lastMessage]);
  return (
    <div className=" w-full  h-screen overflow-x-hidden overflow-y-scroll relative ">
      {messageList.map((m, index) => (
        <Message recieved content={m} key={`${m}${index}`} />
      ))}
      {!lastMessage?.data && <div className="  flex justify-center items-center h-full text-gray-500 text-xl font-bold">there is no messages yet !</div>}
      <div className=" flex p-2  items-center   shadow-sm  fixed border-t-2 border-primary bg-accent  rounded-lg   w-full bottom-0  ">
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
