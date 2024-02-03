'use client';

import { usePathname } from 'next/navigation';

import { signIn } from 'next-auth/react';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

// import { sendDataLayer } from '@/common/libs/gtm'

export default function SignInGoogleButton() {
  // const pathname = usePathname()
  function handleGoogleSignIn() {
    // sendDataLayer({ event: 'google_signin_clicked', page_path: pathname })
    signIn('google');
  }
  return (
    <button
      id="google-sign-in"
      onClick={handleGoogleSignIn}
      className="flex space-x-2 py-2 px-8 rounded-lg items-center justify-center shadow-xl dark:shadow-none border dark:border-neutral-700 transition duration-300 bg-white hover:bg-neutral-200 w-max mt-2 mb-2"
    >
      <GoogleIcon size={18} />
      <span className="text-neutral-900">Sign in with Google</span>
    </button>
  );
}
