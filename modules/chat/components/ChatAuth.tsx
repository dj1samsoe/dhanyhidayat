import Image from 'next/image';

import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import React from 'react';
import { FaSignOutAlt as SignOutIcon } from 'react-icons/fa';

import { IReply } from '@/common/types/chat';

import ChatInput from './ChatInput';
import SignInGoogleButton from './SignInGoogleButton';

interface ChatAuthProps {
  user: User;
  sendMessage: (message: string) => void;
  reply: IReply;
  cancleReply: () => void;
}
export default function ChatAuth({ user, reply, sendMessage, cancleReply }: ChatAuthProps) {
  return (
    <>
      {user ? (
        <div>
          <ChatInput sendMessage={sendMessage} reply={reply} cancleReply={cancleReply} />
          <div className="flex text-sm mt-6 justify-between items-center">
            <div className=" text-neutral-500 flex items-center space-x-2">
              <Image src={String(user.image)} alt={String(user.name)} width={35} height={35} className="rounded-full" />
              <div className="flex flex-col">
                <span>{user.name}</span>
                <span className="text-xs font-thin">{user.email}</span>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className="flex items-center text-xs space-x-2 text-red-500"
              aria-label="Sign out"
            >
              <span>Sign out</span>
              <SignOutIcon size={14} />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-neutral-600 dark:text-neutral-200 text-sm">Please sign in to typing</p>
          <SignInGoogleButton />
        </div>
      )}
    </>
  );
}
