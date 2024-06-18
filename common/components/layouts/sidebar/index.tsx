import Breakline from '@/common/components/elements/Breakline';
import Copyright from '@/common/components/elements/Copyright';

import Navigation from './Navigation';
import Profile from './Profile';

export default function Sidebar() {
  return (
    <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col space-y-4 lg:py-8 lg:dark:bg-[#4949492e] lg:bg-white lg:px-4 lg:w-64 lg:rounded-lg">
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
