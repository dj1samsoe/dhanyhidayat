'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { FaRegStopCircle, FaSpotify } from 'react-icons/fa';

import { NowPlaying } from '@/common/types/spotify';

import Card from './Card';

type NowPlayingProps = {
  data: NowPlaying;
};

export default function NowPlayingSection({ data }: NowPlayingProps) {
  if (data)
    return (
      <Card
        className="flex items-center justify-start min-w-[250px] lg:w-fit max-w-full rounded-xl bg-zinc-200 p-3 dark:bg-[#4949492e]"
        data-testid="now-playing"
      >
        <Link href={data.href} target="_blank" rel="noopener noreferrer">
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
        </Link>

        <div className="mx-5 overflow-x-hidden">
          <h1 className="mb-3 text-xs font-semibold sm:text-sm">
            {data?.currentlyPlaying ? (
              <div className="flex items-center gap-2">
                <motion.div
                  className="h-2 w-2 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Now Playing</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <FaRegStopCircle className="h-3 w-3 text-red-600" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Last Played</span>
              </div>
            )}
          </h1>
          <a
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
            className="line-clamp-1 text-base font-bold hover:line-clamp-none hover:whitespace-nowrap hover:underline sm:text-lg"
          >
            {data.name}
          </a>
          <div className="line-clamp-1 text-sm font-semibold hover:line-clamp-none truncate sm:text-base">
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
                {i === data.artists.length - 1 ? ' ' : ', '}
              </span>
            ))}
          </div>
        </div>
      </Card>
    );
}
