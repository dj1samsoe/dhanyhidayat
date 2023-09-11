import { Metadata } from 'next';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { METADATA } from '@/common/constant/metadata';

import Contact from '@/modules/contact';

export const metadata: Metadata = {
  title: `Contact ${METADATA.exTitle}`,
  description: `A contact of ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/contact`
  }
};

const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION =
  'Have a question, a suggestion, or just want to say hello? I am all ears and ready to connect with you.';

export default function ContactPage() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Contact />
      </Container>
    </>
  );
}
