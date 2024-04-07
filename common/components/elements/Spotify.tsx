'use client';

import { FaSpotify } from 'react-icons/fa';

import { useGetDataSpotify } from '@/hooks/useGetDataSpotify';

import NowPlayingSection from './NowPlaying';

export default function Spotify() {
  const { data, error, isLoading } = useGetDataSpotify();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full bg-zinc-200 py-1 dark:bg-[#4949492e] animate-pulse">
        {/* <div className="w-[75px] animate-pulse overflow-hidden rounded-lg p-5 sm:w-[100px]">
          <FaSpotify className="h-8 w-8" />
        </div> */}

        {/* <div className="mx-5">
          <div className="mb-5 mt-1">
            <div className="w-28 animate-pulse rounded-full bg-zinc-300 p-2 dark:bg-[#4949492e] sm:w-40"></div>
          </div>
          <div className="mb-2 w-32 animate-pulse rounded-full bg-zinc-300 p-3 dark:bg-[#4949492e] sm:w-48"></div>
          <div className="w-40 animate-pulse rounded-full bg-zinc-300 p-2 dark:bg-[#4949492e] sm:w-52"></div>
        </div> */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full bg-zinc-200 py-1 dark:bg-[#4949492e]">
        {/* <div className="flex items-center gap-5 overflow-hidden rounded-lg"> */}
        {/* <FaSpotify className="h-10 w-10 text-green-500" /> */}
        {/* <div className="flex flex-col space-y-2"> */}
        {/* <h1 className="text-md font-semibold sm:text-lg">Spotify For Developers</h1> */}
        <p className="text-xs sm:text-sm">No Music Playing</p>
        {/* </div> */}
        {/* </div> */}
      </div>
    );
  }

  if (data) {
    return <NowPlayingSection data={data} />;
  }
}
