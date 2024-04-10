'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { FaRegStopCircle, FaSpotify } from 'react-icons/fa';

import clsxm from '@/common/libs/clsxm';
import { NowPlaying } from '@/common/types/spotify';

import Card from './Card';

type NowPlayingProps = {
  data: NowPlaying;
};

export default function NowPlayingSection({ data }: NowPlayingProps) {
  if (data)
    return (
      <div
        className={clsxm(
          'flex items-center justify-center w-full py-1',
          data?.currentlyPlaying ? 'bg-green-600 dark:bg-green-600 text-white' : 'bg-zinc-200 dark:bg-[#4949492e]'
        )}
      >
        {/* <Link href={data.href} target="_blank" rel="noopener noreferrer">
          <div className="relative w-[75px] overflow-hidden rounded-lg sm:w-[100px]">
            <Image src={data?.albumArt.url} alt="Album art" width={100} height={100} />
            <div className="absolute right-8 bottom-8 top-8 z-20 backdrop-blur-md">
              {data?.currentlyPlaying ? (
                <FaSpotify className="h-9 w-9 text-green-500" />
              ) : (
                <FaSpotify className="h-9 w-9" />
              )}
            </div>
          </div>
        </Link> */}

        <div className="mx-5 overflow-x-hidden">
          <div className="flex gap-1 items-center">
            <div className="text-xs font-semibold sm:text-sm mr-1">
              {data?.currentlyPlaying ? (
                // <div className="flex items-center gap-2">
                // <motion.div
                //   className="h-2 w-2 rounded-full bg-green-300"
                //   animate={{ scale: [1, 1.2, 1] }}
                //   transition={{ duration: 0.5, repeat: Infinity }}
                // />
                <div className="flex gap-2 items-center">
                  <h2 className="truncate">Now Playing on</h2>
                  <FaSpotify className="h-5 w-5 text-neutral-800" />
                </div>
              ) : (
                // <span className="text-sm text-neutral-600 dark:text-neutral-400">Now Playing</span>
                // </div>
                // <div className="flex items-center gap-2">
                // <FaRegStopCircle className="h-3 w-3 text-red-600" />
                <div className="flex gap-2 items-center">
                  <h2 className="truncate">Last Played on</h2>
                  <FaSpotify className="h-5 w-5 text-green-500" />
                </div>
                //  <span className="text-sm text-neutral-600 dark:text-neutral-400">Last Played</span>
                // </div>
              )}
            </div>
            <a
              href={data.href}
              target="_blank"
              rel="noopener noreferrer"
              className="line-clamp-1 text-sm font-bold hover:line-clamp-none hover:whitespace-nowrap hover:underline"
            >
              {data.name}
            </a>
            <div className="line-clamp-1 text-sm font-semibold hover:line-clamp-none truncate">
              by{' '}
              {data?.artists.map((artist, i) => (
                <span key={`artist${i}`}>
                  <a
                    className="hover:cursor-pointer hover:underline"
                    rel="noopener noreferrer"
                    aria-label={artist.name}
                    href={artist.href}
                    target="_blank"
                  >
                    {artist.name}
                  </a>
                  {i === data.artists.length - 1 ? ' ' : ' ft. '}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
