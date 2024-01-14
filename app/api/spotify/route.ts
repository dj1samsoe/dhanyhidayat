import { NextResponse } from 'next/server';

import { Artist as ArtistRecentlyPlayed, RecentlyPlayed } from '@/common//types/spotify';
import { getAccessToken, getCurrentTrack, getLastPlayedTrack } from '@/common/libs/spotify';
import { Artist, CurrentlyPlaying } from '@/common/types/spotify';

export const dynamic = 'force-dynamic';

export async function GET() {
  const accessToken = await getAccessToken();
  const track = (await getCurrentTrack(accessToken)) as CurrentlyPlaying;
  const lastTrack = (await getLastPlayedTrack(accessToken)) as RecentlyPlayed;

  if (!accessToken)
    return NextResponse.json(
      {
        error: 'Error fetching access_token from Spotify'
      },
      { status: 500 }
    );
  else {
  }

  if (track)
    return NextResponse.json({
      name: track.item.name,
      artists: track.item.artists.map((artist: Artist) => {
        return { name: artist.name, href: artist.external_urls.spotify };
      }),
      href: track.item.external_urls.spotify,
      albumArt: track.item.album.images[0],
      currentlyPlaying: true
    });

  if (lastTrack)
    return NextResponse.json({
      name: lastTrack.items[0].track.name,
      artists: lastTrack.items[0].track.artists.map((artist: ArtistRecentlyPlayed) => {
        return {
          name: artist.name,
          href: artist.external_urls.spotify
        };
      }),
      href: lastTrack.items[0].track.external_urls.spotify,
      albumArt: lastTrack.items[0].track.album.images[0],
      currentlyPlaying: false
    });

  return NextResponse.json(
    {
      error: 'Error fetching data from Spotify'
    },
    { status: 500 }
  );
}
