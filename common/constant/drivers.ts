import { DriveStep } from 'driver.js';

export const tourChatRoom: DriveStep[] = [
  {
    element: '#chat-card',
    popover: {
      title: 'Message',
      description: 'The message is where you type in message field and send it.',
      side: 'bottom',
      align: 'center'
    }
  },
  {
    element: '#google-sign-in',
    popover: {
      title: 'Sign In with Google',
      description: 'You can sign in with your Google account to start typing messages.',
      side: 'top',
      align: 'center'
    }
  },
  {
    popover: {
      title: "You're Ready to Get Started!",
      description:
        "Congratulations! You've now been introduced to all the awesome features of Guestbook. Happy Discussion!",
      side: 'top',
      align: 'center'
    }
  }
];
