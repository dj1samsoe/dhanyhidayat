'use client';

import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { FaRobot as BotIcon } from 'react-icons/fa';

import Chatbot from './Chatbot';

export default function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatButtonClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      <button
        aria-label="chat button"
        className="fixed bottom-6 right-6 p-3 bg-neutral-800 dark:bg-neutral-300 rounded-full dark:hover:bg-neutral-400 hover:bg-neutral-700 transition-all duration-300 shadow-lg"
        onClick={handleChatButtonClick}
      >
        <BotIcon size={30} className="text-neutral-300 dark:text-neutral-800" />
      </button>
      <AnimatePresence>{isChatOpen && <Chatbot isOpen={isChatOpen} onClose={handleCloseChat} />}</AnimatePresence>
    </>
  );
}
