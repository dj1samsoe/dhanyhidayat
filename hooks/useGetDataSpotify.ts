import useSWR from 'swr';

import { NowPlaying } from '@/common/types/spotify';

export function useGetDataSpotify() {
  const fetcher = (url: string) =>
    fetch(url).then(async res => {
      if (res.ok) return res.json();
      else return Promise.reject(await res.json());
    });
  const { data, error, isLoading } = useSWR<NowPlaying>('/api/spotify', fetcher);
  return {
    data,
    isLoading,
    error
  };
}
