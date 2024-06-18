'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRegTrashAlt, FaRobot } from 'react-icons/fa';

import useChatbotStore from '@/stores/chatbotStore';

import Breakline from './Breakline';
import MDXComponent from './MDXComponent';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const { chat, setChat } = useChatbotStore();
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    useChatbotStore.setState({ chat });
  }, [chat]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  const handleUserMessage = async (message: string) => {
    setIsLoading(true);
    const userMessage = { user: message, bot: 'Thinking...' };

    setChat([...chat, userMessage]);

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userMessage: message })
    });

    const data = await response.json();

    setChat(prevChat => {
      const updatedChat = [...prevChat];
      updatedChat[updatedChat.length - 1] = { user: message, bot: data.reply };
      return updatedChat;
    });

    setIsLoading(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      handleUserMessage(target.value);
      target.value = '';
    }
  };

  const handleDeleteChat = () => {
    setChat([]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: -40, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed z-50 bottom-10 md:right-7 right-5 md:w-full w-[350px] md:max-w-sm h-[500px] dark:bg-light bg-neutral-600/90 backdrop-blur-xl shadow-xl rounded-lg border-2 dark:border-neutral-300 border-none p-4 font-bricolage`}
        >
          <div className="flex flex-col justify-between h-full w-full overflow-hidden">
            <div className="text-white dark:text-neutral-800 flex flex-col">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Ask anything about me</span>
                <button
                  onClick={onClose}
                  className="dark:text-neutral-800 text-white p-1 rounded-lg border dark:border-none shadow-lg"
                >
                  <AiOutlineClose size={20} />
                </button>
              </div>
              <Breakline className="!bg-light dark:!bg-dark" />
            </div>
            <div
              ref={chatContainerRef}
              className="flex flex-col space-y-4 px-2 overflow-y-auto w-full h-full overflow-x-hidden"
            >
              {chat.length === 0 ? (
                <div className="flex flex-col space-y-4 justify-center items-center h-full">
                  <div className="p-4 rounded-full bg-white text-dark shadow-xl dark:border border-none">
                    <FaRobot size={50} />
                  </div>
                  <h1 className="dark:text-neutral-800 text-white font-bold text-lg text-center">
                    Send a message to start conversation with my AI Assistant.
                  </h1>
                  <p className="dark:text-neutral-800 text-neutral-300 text-sm text-center">
                    You can ask anything about me, my work, or anything else you want to know
                  </p>
                </div>
              ) : (
                chat.map((message, index) => (
                  <div key={index} className={`flex flex-col space-y-4 w-full`}>
                    {message.user && (
                      <div className="w-full flex justify-end">
                        <div className="bg-neutral-900 text-white text-sm rounded-s-xl rounded-ee-xl py-2 px-4 w-fit flex flex-col space-y-1 items-end">
                          <h1 className="font-bold">You</h1>
                          <div className="whitespace-pre-wrap text-end">{message.user}</div>
                        </div>
                      </div>
                    )}
                    {message.bot && (
                      <div className="w-full flex justify-start">
                        <div className="bg-neutral-300 text-dark text-sm rounded-e-xl rounded-es-xl py-2 px-4 w-fit flex flex-col space-y-1 items-start">
                          <h1 className="font-bold">Dhany Hidayat</h1>
                          {index === chat.length - 1 && isLoading ? (
                            <p>Thinking...</p>
                          ) : (
                            <div className="whitespace-pre-wrap font-medium">
                              <MDXComponent>{message.bot}</MDXComponent>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
            <div className="pt-4">
              <div className="w-full flex gap-0 items-center justify-start rounded-lg border pl-4 bg-neutral-950">
                <button onClick={handleDeleteChat} className="p-2 text-white">
                  <FaRegTrashAlt size={16} />
                </button>
                <input
                  type="text"
                  placeholder="Enter your questions..."
                  onKeyDown={handleKeyDown}
                  className="w-full py-4 pr-4 pl-2 text-sm rounded-lg focus:outline-none bg-neutral-950 text-white"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;
