"use client";
import useWebSocket from "react-use-websocket";
import { Input } from "@/components/ui/input";
import { BsSendFill } from "react-icons/bs";
import Message from "@/components/shared/message";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { MessageValidationSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";

interface MessageData {
  message: string;
  userID: string;
}

export default function Home() {
  const [messageList, setMassageList] = useState<MessageData[]>([]);
  const { sendMessage, lastMessage } = useWebSocket(
    `ws://${process.env.NEXT_PUBLIC_SERVER_API}/ws`
  );
  const [MyMessage, setMyMessage] = useState<string>("");
  const router = useRouter();

  const [cookie, setCookie] = useCookies(["userID"]);

  const handleClick = () => {
    if (MyMessage.trim().length) {
      sendMessage(MyMessage);

      setMyMessage("");
    }
  };
  useEffect(() => {
    if (!cookie.userID) {
      router.push("/");
    }
      
    if (lastMessage) {
      const {
        message,
        data: { userID },
      } = JSON.parse(lastMessage.data);

      setMassageList((prev) => [...prev, { message, userID }]);
    }
  }, [lastMessage]);
  return (
    <div className=" w-full   h-screen overflow-x-hidden overflow-y-scroll relative ">
      {messageList.map(({ message, userID }, index) => (
        <Message
          recieved={cookie.userID != userID}
          content={message}
          key={`${message}${index}`}
        />
      ))}
      {!lastMessage?.data && (
        <div className="  flex justify-center items-center h-full text-gray-500 text-xl font-bold">
          there is no messages yet !
        </div>
      )}
      <div className=" flex p-2  items-center   shadow-sm  fixed border-t-2 border-primary bg-accent  rounded-lg   w-full bottom-0  ">
        <Input
          placeholder="type something"
          value={MyMessage}
          required
          onChange={(e) => setMyMessage(e.target.value)}
        />
        <button className=" m-6  " onClick={handleClick}>
          <BsSendFill className=" text-primary" size={30} />
        </button>
      </div>
    </div>
  );
}
