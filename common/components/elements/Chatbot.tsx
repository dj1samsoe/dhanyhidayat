'use client';

import { motion } from 'framer-motion';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRegTrashAlt, FaRobot } from 'react-icons/fa';

import useChatbotStore from '@/stores/chatbotStore';

import Breakline from './Breakline';

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
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ opacity: 1, y: -50 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed md:bottom-10 bottom-0 md:right-7 right-0 w-full max-w-96 h-[500px] bg-light dark:bg-neutral-600/50 dark:backdrop-blur-xl shadow-xl rounded-lg flex flex-col overflow-hidden border dark:border-none p-4 ${!isOpen && 'hidden'}`}
    >
      <div className="dark:text-white flex flex-col">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Ask anything about me</span>
          <button onClick={onClose} className="dark:text-white">
            <AiOutlineClose size={20} />
          </button>
        </div>
        <Breakline />
      </div>
      <div ref={chatContainerRef} className="flex flex-col space-y-4 overflow-y-auto w-full h-full overflow-x-hidden">
        {chat.length === 0 ? (
          <div className="flex flex-col space-y-4 justify-center items-center h-full">
            <div className="p-4 rounded-full dark:bg-white dark:text-dark">
              <FaRobot size={50} />
            </div>
            <h1 className="dark:text-white font-bold text-lg text-center">
              Send a message to start conversation with our AI Assistant.
            </h1>
            <p className="dark:text-neutral-400 text-sm text-center">
              You can ask anything about me, my work, or anything else you want to know
            </p>
          </div>
        ) : (
          chat.map((message, index) => (
            <div key={index} className={`flex flex-col space-y-4 w-full`}>
              {message.user && (
                <div className="w-full flex justify-end">
                  <div className="bg-blue-500 dark:bg-neutral-900 text-white text-sm rounded-s-xl rounded-ee-xl py-2 px-4 w-fit flex flex-col space-y-1 items-end">
                    <h1 className="font-bold">You</h1>
                    <div dangerouslySetInnerHTML={{ __html: message.user }} className="whitespace-pre-wrap" />
                  </div>
                </div>
              )}
              {message.bot && (
                <div className="w-full flex justify-start">
                  <div className="bg-gray-200 text-dark text-sm rounded-e-xl rounded-es-xl py-2 px-4 w-fit flex flex-col space-y-1 items-start">
                    <h1 className="font-bold">Dhany Hidayat</h1>
                    {index === chat.length - 1 && isLoading ? (
                      <p>Thinking...</p>
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: message.bot }} className="whitespace-pre-wrap" />
                    )}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      <div className="pt-4">
        <div className="w-full flex gap-0 items-center justify-start rounded-lg border dark:border-none pl-4 dark:bg-neutral-950">
          <button onClick={handleDeleteChat} className="p-2">
            <FaRegTrashAlt size={16} />
          </button>
          <input
            type="text"
            placeholder="Enter your questions..."
            onKeyDown={handleKeyDown}
            className="w-full py-4 pr-4 pl-2 text-sm rounded-lg focus:outline-none dark:bg-neutral-950"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Chatbot;
