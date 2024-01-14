export type CurrentlyPlaying = {
  context: Context;
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: Item;
  currently_playing_type: string;
  actions: Actions;
};

export type Actions = {
  disallows: Disallows;
};

export type Disallows = {
  resuming: boolean;
};

export type Context = {
  type: string;
  href: string;
  external_urls: ExternalUrls;
  uri: string;
};

export type ExternalUrls = {
  spotify: string;
};

export type Item = {
  album: Album;
  artists: Artist[];
  available_markets: any[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

export type Album = {
  album_type: string;
  total_tracks: number;
  available_markets: any[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: Artist[];
};

export type Artist = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type Image = {
  url: string;
  height: number;
  width: number;
};

export type ExternalIDS = {
  isrc: string;
};

export type NowPlaying = {
  name: string;
  artists: ArtistNowPlaying[];
  href: string;
  albumArt: AlbumArt;
  currentlyPlaying: boolean;
};

export type AlbumArt = {
  height: number;
  url: string;
  width: number;
};

export type ArtistNowPlaying = {
  name: string;
  url: string;
};

export type RecentlyPlayed = {
  href: string;
  limit: number;
  next: string;
  cursors: Cursors;
  items: ItemRecentlyPlayed[];
};

export type Cursors = {
  after: string;
  before: string;
};

export type ItemRecentlyPlayed = {
  track: TrackRecentlyPlayed;
  played_at: Date;
  context: Context;
};

export type ContextRecentlyPlayed = {
  type: string;
  href: string;
  external_urls: ExternalUrls;
  uri: string;
};

export type ExternalUrlsRecentlyPlayed = {
  spotify: string;
};

export type TrackRecentlyPlayed = {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

export type AlbumRecentlyPlayed = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: Artist[];
};

export type ArtistRecentlyPlayed = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type ImageRecentlyPlayed = {
  url: string;
  height: number;
  width: number;
};

export type ExternalIDSRecentlyPlayed = {
  isrc: string;
};
