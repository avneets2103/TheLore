"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Input,
} from "@nextui-org/react";
import Loader from "@/components/ui/loader";
import { aboutMe, BACKEND_URI } from "@/CONSTANTS";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

interface Message {
  text: string;
  sender: "not_user" | "user";
}

function TARSbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [conversation, setConversation] = useState<Message[]>([
    {
      text: "Hey, I am TARS. Avneet's AI Assistant! What brings you here?",
      sender: "not_user",
    },
  ]);
  const formatTextAsHTML = (text: string): string => {
    return text
      .replace(/\*(.+?)\*/g, "<strong>$1</strong>") 
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") // Convert **text** to <strong>text</strong>
      .replace(/^\*\s(.+)$/gm, "• $1") // Convert lines starting with * to bullet points
      .replace(/\b([^:\s]+):\s/g, "<strong>$1:</strong>") // Bold text before colons
      .replace(/\n/g, "<br>") // Convert newlines to <br> tags
      .replace(/(^|\n)(\d+)\.\s(?!\d{1,2}\/\d{1,2}\/\d{2,4})/g, "<br>$2. ") // Add line breaks for numbered lists, exclude dates
      .replace(/\n\s*[-]\s/g, "<br>• ") // Add line breaks and bullets for lists with dashes
      .replace(/\n{2,}/g, "<br><br>"); // Convert multiple newlines to <br><br>
  };
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = useState<string>("");
  const [context, setContext] = useState("");
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [conversation]);
  const [waitForRes, setWaitForRes] = useState(false);
  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;
    const newMessage: Message = { text: inputText.trim(), sender: "user" };
    setConversation((prev) => [...prev, newMessage]);
    setWaitForRes(true);
    setInputText("");

    try {
      const res = await axios.post(`${BACKEND_URI}/tars/chat`, {
        prompt: inputText,
        context: context,
      });
      setContext(res.data.data.newContext);
      const newMessage2: Message = {
        text: formatTextAsHTML(res.data.data.response),
        sender: "not_user",
      };
      setConversation((prev) => [...prev, newMessage2]);
    } catch (error) {
      console.log("Error in sending message to the server: ", error);
    } finally {
      setWaitForRes(false);
    }
  };

  return (
    <>
      <div className="w-full flex justify-end">
        <Button variant="faded" color="danger" onPress={()=> setChatOpen(!chatOpen)}>
          TARS Bot
        </Button>
      </div>
      <AnimatePresence>
      {chatOpen && (
        <motion.div className="bg-gray-900/50 backdrop-blur-sm rounded-[10px] p-3 mt-2"
          initial={{ opacity: 0, translateX: 20 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="m-2 flex lg:w-[40vw] flex-col gap-4">
            <div>
              <p className="text-lg font-semibold">Ask TARS Anything!</p>
            </div>
            <div className="m-0 flex flex-col justify-between p-0">
              <div
                ref={chatBodyRef}
                className="flex max-h-[60vh] flex-col overflow-y-auto text-gray-400 hide-scrollbar"
              >
                {conversation.map((message, index) => (
                  <div
                    key={index}
                    className={
                      message.sender === "user"
                        ? "bg-gray-700px-[10px] mb-[10px] flex max-w-[70%] self-end rounded-[10px] bg-gray-800 px-[10px] py-[8px]"
                        : "mb-[10px] flex max-w-[70%] self-start rounded-[10px] bg-black px-[10px] py-[8px]"
                    }
                  >
                    {message.sender === "user" ? (
                      <span>{message.text}</span>
                    ) : (
                      <span
                        dangerouslySetInnerHTML={{ __html: message.text }}
                      />
                    )}
                  </div>
                ))}
                {waitForRes && (
                  <div className="flex items-center justify-center my-2">
                    <Loader /> {/* Display loader while waiting for response */}
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-2 pt-2">
                <Input
                  color={"danger"}
                  disabled={waitForRes}
                  type="text"
                  placeholder={
                    waitForRes ? "Waiting for response..." : "Type a message..."
                  }
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                />
                <div className="flex w-full justify-end lg:w-auto">
                  <Button
                    color="danger"
                    variant="light"
                    onPress={() => {
                      setConversation([
                        {
                          text: "Hey, I am TARS. Avneet's AI Assistant! What brings you here?",
                          sender: "not_user",
                        },
                      ]);
                      setContext("");
                    }}
                  >
                    Reset Chat
                  </Button>
                  <Button color="danger" className="lg:hidden" isIconOnly variant="light" onPress={
                    ()=>{
                      handleSendMessage();
                    }
                  }>➤</Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}

export default TARSbot;
