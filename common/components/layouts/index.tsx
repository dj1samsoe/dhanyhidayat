'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { ReactNode, useEffect } from 'react';

import MobileMenuHeader from './MobileMenuHeader';
import Sidebar from './sidebar';

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const readMode = searchParams.get('read-mode');

  const hideSidebar = pathName === '/me' || readMode === 'true';

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
      once: true
    });
  }, []);
  return (
    <div className="flex flex-col justify-center lg:flex-row lg:gap-5">
      <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-5">
        {!hideSidebar && <MobileMenuHeader /> && (
          <header>
            <Sidebar />
          </header>
        )}
        <main className="lg:max-w-[854px] transition-all duration-300 w-full lg:min-h-screen overflow-y-auto no-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
