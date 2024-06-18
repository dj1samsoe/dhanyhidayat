import { Bricolage_Grotesque, Plus_Jakarta_Sans, Sora } from 'next/font/google';

export const soraSans = Sora({
  variable: '--soraSans-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const jakartaSans = Plus_Jakarta_Sans({
  variable: '--jakartaSans-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['400', '500', '600', '700', '800']
});

export const bricolage = Bricolage_Grotesque({
  variable: '--bricolage-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['400', '500', '600', '700', '800']
});
