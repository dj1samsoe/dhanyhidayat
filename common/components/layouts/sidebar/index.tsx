import Breakline from '@/common/components/elements/Breakline';
import Copyright from '@/common/components/elements/Copyright';

import useIsMobile from '@/hooks/useIsMobile';

import Navigation from './Navigation';
import Profile from './Profile';

export default function Sidebar() {
  const isMobile = useIsMobile();
  return (
    <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8 lg:dark:bg-[#4949492e] lg:bg-white lg:px-5 lg:rounded-lg">
      <Profile />
      <nav className="hidden md:block">
        <Breakline />
        <div className="hidden lg:block">
          <Navigation />
        </div>
        <Breakline />
        <Copyright />
      </nav>
    </div>
  );
}
