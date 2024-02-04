'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { FaRegStopCircle, FaSpotify } from 'react-icons/fa';

import { NowPlaying } from '@/common/types/spotify';

type NowPlayingProps = {
  data: NowPlaying;
};

export default function NowPlayingSection({ data }: NowPlayingProps) {
  if (data)
    return (
      <div
        className="flex items-center justify-start min-w-[250px] lg:w-fit max-w-full rounded-xl bg-zinc-200 p-3 pr-3 dark:bg-[#4949492e] md:pr-10"
        data-testid="now-playing"
      >
        <Link href={data.href} target="_blank" rel="noopener noreferrer">
          <div className="relative w-[75px] overflow-hidden rounded-lg sm:w-[100px]">
            <Image src={data?.albumArt.url} alt="Album art" width={100} height={100} />
            <div className="absolute bottom-0 right-3 z-20 w-6">
              {data?.currentlyPlaying ? (
                <FaSpotify className="h-8 w-8 text-green-500" />
              ) : (
                <FaSpotify className="h-8 w-8" />
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
          <div className="line-clamp-1 text-sm font-semibold hover:line-clamp-none hover:whitespace-nowrap sm:text-base">
            by
            {data?.artists.map((artist, i) => (
              <span key={`artist${i}`} className="ml-1">
                <a className="hover:cursor-pointer hover:underline" href={artist.href} target="_blank">
                  {artist.name}
                </a>
                {i === data.artists.length - 1 ? '' : ','}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
}

// export function RecentlyPlayedSection({ data }: RecentlyPlayedProps) {
//   if (data)
//     return (
//       <div className="flex items-center justify-start min-w-[250px] max-w-full rounded-xl bg-zinc-200 p-3 pr-3 dark:bg-[#4949492e] -lg md:pr-10">
//         {data?.items.map((item, i) => (
//           <>
//             <Link href={item.track.href} target="_blank" rel="noopener noreferrer">
//               <div className="relative w-[75px] overflow-hidden rounded-lg sm:w-[100px]" key={item.track.id}>
//                 <Image src={item.track.album.images[0].url} alt="Album art" width={100} height={100} />
//                 <div className="absolute bottom-0 right-3 z-20 w-6">
//                   <FaSpotify className="h-8 w-8 text-green-500" />
//                 </div>
//               </div>
//             </Link>
//             <div className="mx-5 overflow-x-hidden">
//               <h1 className="mb-3 text-xs font-semibold sm:text-sm">LAST PLAYED IN SPOTIFY</h1>
//               <a
//                 href={item.track.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="line-clamp-1 text-base font-bold hover:line-clamp-none hover:whitespace-nowrap hover:underline sm:text-lg"
//               >
//                 {item.track.name}
//               </a>
//               {item?.track.artists.map((artist, i) => (
//                 <div className="line-clamp-1 text-sm font-semibold hover:line-clamp-none hover:whitespace-nowrap sm:text-base">
//                   by {artist.name}
//                 </div>
//               ))}
//             </div>
//           </>
//         ))}
//       </div>
//     );
// }
