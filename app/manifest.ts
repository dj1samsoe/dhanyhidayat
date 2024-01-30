import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Achmad Fauzian Dhany Hidayat - Frontend Developer',
    short_name: 'Dhany Hidayat',
    description:
      'Personal website, portfolio, blog, programming tips of dhanhid, dhany hidayat, dhany hidayat personal website',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  };
}
