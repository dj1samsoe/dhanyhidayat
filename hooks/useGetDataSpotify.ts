import useSWR from 'swr';

import { NowPlaying, RecentlyPlayed } from '@/common/types/spotify';

export function useGetDataSpotify() {
  const fetcher = (url: string) =>
    fetch(url).then(async res => {
      if (res.ok) return res.json();
      else return Promise.reject(await res.json());
    });
  const { data, error, isLoading } = useSWR<NowPlaying>(
    '/api/spotify',
    fetcher,
    process.env.NODE_ENV === 'production' ? { refreshInterval: 3000 } : {}
  );
  return {
    data,
    isLoading,
    error
  };
}
// import { NowPlaying, RecentlyPlayed } from '@/common/types/spotify';

export function useGetLastPlayedSpotify() {
  const fetcher = (url: string) =>
    fetch(url).then(async res => {
      if (res.ok) return res.json();
      else return Promise.reject(await res.json());
    });

  const { data, error, isLoading } = useSWR<RecentlyPlayed>(
    '/api/spotify/',
    fetcher,
    process.env.NODE_ENV === 'production' ? { refreshInterval: 3000 } : {}
  );

  return {
    data,
    error,
    isLoading
  };
}