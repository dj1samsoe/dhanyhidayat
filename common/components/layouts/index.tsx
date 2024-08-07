'use client';

import dynamic from 'next/dynamic';
import { usePathname, useSearchParams } from 'next/navigation';

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { ReactNode, useEffect } from 'react';

import { bricolage, jakartaSans } from '@/common/styles/fonts';

import ChatButton from '../elements/ChatButton';
import Spotify from '../elements/Spotify';
import Sidebar from './sidebar';

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const readMode = searchParams.get('read-mode');

  const hideSidebar = readMode === 'true';

  const isShowChatButton = pathName !== '/chat';
  const Notif = dynamic(() => import('@/common/components/elements/Notif'), { ssr: false });

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
      once: true
    });
  }, []);
  return (
    <>
      <style jsx global>
        {`
          html {
            --jakartaSans-font: ${jakartaSans.style.fontFamily};
            --bricolage-font: ${bricolage.style.fontFamily};
          }
        `}
      </style>
      <div className="flex flex-col justify-center w-full lg:flex-row lg:gap-5">
        <div className="flex flex-col lg:flex-row lg:gap-5 lg:py-4 xl:pb-8">
          {!hideSidebar && (
            <header>
              <Sidebar />
            </header>
          )}
          <main className="lg:w-[900px] max-w-[900px] transition-all duration-300 lg:min-h-screen overflow-y-auto no-scrollbar lg:dark:bg-[#4949492e] lg:bg-white lg:rounded-lg">
            {children}
          </main>
        </div>
      </div>
      <Notif />
      {isShowChatButton && <ChatButton />}
      <Spotify />
    </>
  );
}
