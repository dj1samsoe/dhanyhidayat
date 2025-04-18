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
  const [streamingMessage, setStreamingMessage] = useState<string[]>([]); // Kata-kata yang sedang distream

  useEffect(() => {
    const storedChat = localStorage.getItem('chat-history');
    if (storedChat) {
      try {
        const parsedChat = JSON.parse(storedChat);
        if (Array.isArray(parsedChat)) {
          setChat(() => parsedChat);
        }
      } catch (error) {
        console.error('Error parsing chat history from localStorage:', error);
      }
    }
  }, [setChat]);

  useEffect(() => {
    if (chat.length > 0) {
      localStorage.setItem('chat-history', JSON.stringify(chat));
    }
  }, [chat]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chat, streamingMessage]);

  const handleUserMessage = async (message: string) => {
    setIsLoading(true);
    setStreamingMessage([]);

    const newChat = [...chat, { role: 'user' as 'user', content: message }];
    setChat(newChat);
    localStorage.setItem('chat-history', JSON.stringify(newChat));

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages: newChat })
    });

    if (response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(line => line.trim());

        for (const line of lines) {
          const parsed = JSON.parse(line);
          if (parsed.word) {
            setStreamingMessage(prev => [...prev, parsed.word]);
          } else if (parsed.complete) {
            fullText = parsed.complete;
            const updatedChat = [...newChat, { role: 'model' as 'model', content: fullText }];
            setChat(updatedChat);
            localStorage.setItem('chat-history', JSON.stringify(updatedChat));
            setStreamingMessage([]); // Reset setelah selesai
            setIsLoading(false);
          }
        }
      }
    }
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
    setStreamingMessage([]);
    localStorage.removeItem('chat-history');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: -40, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed z-50 bottom-10 md:right-7 right-5 md:w-full w-[350px] md:max-w-sm h-[500px] dark:bg-light bg-neutral-600/90 backdrop-blur-xl shadow-xl rounded-lg border-2 dark:border-neutral-300 border-none p-4 font-manrope`}
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
              {chat.length === 0 && streamingMessage.length === 0 && !isLoading ? (
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
                <>
                  {chat.map((message, index) => (
                    <div key={index} className="flex flex-col space-y-4 w-full">
                      {message.role === 'user' && (
                        <div className="w-full flex justify-end">
                          <div className="bg-neutral-900 text-white text-sm rounded-s-xl rounded-ee-xl py-2 px-4 w-fit flex flex-col space-y-1 items-end">
                            <h1 className="font-bold">You</h1>
                            <div className="whitespace-pre-wrap text-start">{message.content}</div>
                          </div>
                        </div>
                      )}
                      {message.role === 'model' && (
                        <div className="w-full flex justify-start">
                          <div className="bg-neutral-300 text-dark text-sm rounded-e-xl rounded-es-xl py-2 px-4 w-fit flex flex-col space-y-1 items-start">
                            <h1 className="font-bold">Dhany Hidayat</h1>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className="whitespace-pre-wrap font-medium"
                            >
                              <MDXComponent>{message.content}</MDXComponent>
                            </motion.div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="w-full flex justify-start">
                      <div className="bg-neutral-300 text-dark text-sm rounded-e-xl rounded-es-xl py-2 px-4 w-fit flex flex-col space-y-1 items-start">
                        <h1 className="font-bold">Dhany Hidayat</h1>
                        {streamingMessage.length === 0 ? (
                          <p>Thinking...</p>
                        ) : (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: { opacity: 0 },
                              visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                              }
                            }}
                            className="whitespace-pre-wrap font-medium"
                          >
                            {streamingMessage.map((word, wordIndex) => (
                              <motion.span
                                key={wordIndex}
                                variants={{
                                  hidden: { opacity: 0 },
                                  visible: { opacity: 1 }
                                }}
                                style={{ display: 'inline-block', marginRight: '4px' }}
                              >
                                {word}
                              </motion.span>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  )}
                </>
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
