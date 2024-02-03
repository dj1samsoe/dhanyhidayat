'use client';

import { getDatabase, onValue, ref, remove, set } from 'firebase/database';
import { User } from 'next-auth';
import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { tourChatRoom } from '@/common/constant/drivers';
import createDrivers from '@/common/libs/drivers';
import { firebase } from '@/common/libs/firebase';
import { IMessage, IRawMessages } from '@/common/types/chat';

import useHasMounted from '@/hooks/useHasMounted';
import { useNotif } from '@/hooks/useNotif';

import ChatAuth from './ChatAuth';
import ChatItem from './ChatItem';
import ChatItemSkeleton from './ChatItemSkeleton';

interface ChatRoomProps {
  user: User;
}

export default function ChatRoom({ user }: ChatRoomProps) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [reply, setReply] = useState({ isReply: false, name: '' });
  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  const chatListRef = useRef<HTMLDivElement | null>(null);
  const mounted = useHasMounted();
  const notif = useNotif();

  const { runDriver, isProductTour } = createDrivers({ steps: tourChatRoom, product: 'chat-room', timing: 2000 });

  const db = getDatabase(firebase);
  const dbMessages = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_CHAT;

  function sendMessage(message: string) {
    const messageId = uuid();
    const messageRef = ref(db, `${dbMessages}/${messageId}`);

    set(messageRef, {
      id: messageId,
      name: user?.name,
      email: user?.email,
      image: user?.image,
      message,
      created_at: new Date().toISOString(),
      is_show: true,
      is_reply: reply.isReply,
      reply_to: reply.name
    });
  }

  function deleteMessage(id: string) {
    const messageRef = ref(db, `${dbMessages}/${id}`);

    if (messageRef) {
      remove(messageRef);
      notif('Message deleted');
      return null;
    }
  }

  function clickReply(name: string) {
    if (!user) return notif('Please sign in to reply');
    setReply({ isReply: true, name });
  }

  function cancleReply() {
    setReply({ isReply: false, name: '' });
  }

  useEffect(() => {
    const messagesRef = ref(db, dbMessages);
    onValue(messagesRef, snapshot => {
      const data: IRawMessages = snapshot.val();

      // Check if data is defined before processing
      if (data) {
        const transformMessages: IMessage[] = Object.entries(data)
          .map(([id, value]) => ({
            id,
            ...value
          }))
          .sort((a, b) => {
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);
            return dateA.getTime() - dateB.getTime();
          });

        setMessages(transformMessages);
        setLoading(false);
      } else {
        // Handle the case where data is undefined or null
        console.error('Data is undefined or null');
      }
    });
  }, [db, dbMessages]);

  useEffect(() => {
    if (chatListRef.current && !hasScrolledUp) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [messages, hasScrolledUp]);

  useEffect(() => {
    const handleScroll = () => {
      if (chatListRef.current) {
        const isScrolledToBottom =
          chatListRef.current.scrollHeight - chatListRef.current.clientHeight <= chatListRef.current.scrollTop + 5;

        if (isScrolledToBottom) {
          setHasScrolledUp(false);
        } else {
          setHasScrolledUp(true);
        }
      }
    };

    chatListRef.current?.addEventListener('scroll', handleScroll);

    const currentChatListRef = chatListRef.current;

    return () => {
      currentChatListRef?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (mounted && isProductTour) {
    runDriver();
  }

  return (
    <section className="w-full">
      <div
        ref={chatListRef}
        className="md:h-[50vh] h-[65vh] scroll-smooth overflow-y-auto border-b border-neutral-200 dark:border-neutral-600 pb-2 mb-4 space-y-6"
      >
        {loading ? (
          <ChatItemSkeleton />
        ) : (
          messages?.map(message => (
            <ChatItem
              key={message.id}
              {...message}
              sessionEmail={String(user?.email)}
              deleteMessage={deleteMessage}
              clickReply={clickReply}
            />
          ))
        )}
      </div>
      <ChatAuth user={user} sendMessage={sendMessage} reply={reply} cancleReply={cancleReply} />
    </section>
  );
}
