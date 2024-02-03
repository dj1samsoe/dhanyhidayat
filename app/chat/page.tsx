import { Metadata } from 'next';

import { User, getServerSession } from 'next-auth';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { METADATA } from '@/common/constant/metadata';

import ChatRoom from '@/modules/chat';

export const metadata: Metadata = {
  title: `Guestbook ${METADATA.exTitle}`,
  description: 'The guestbook for everyone to share their impressions and suggestions about this website',
  keywords: 'guestbook, dhanyhidayat, chat, community, dhany hidayat chat, dhany hidayat, chatroom with public',
  alternates: {
    canonical: `${process.env.DOMAIN}/chat`
  }
};

const PAGE_TITLE = 'Guestbook';
const PAGE_DESCRIPTION = 'Share your impressions and suggestions about this website here';

export default async function ChatRoomPage() {
  const session = await getServerSession();
  return (
    <>
      <Container data-aos="fade-left">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ChatRoom user={session?.user as User} />
      </Container>
    </>
  );
}
