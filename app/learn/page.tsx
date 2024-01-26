import { Metadata } from 'next';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { LEARN_CONTENTS } from '@/common/constant/learn';
import { METADATA } from '@/common/constant/metadata';

import LearnModule from '@/modules/learn';

export const metadata: Metadata = {
  title: `Learn ${METADATA.exTitle}`,
  description:
    "It is my own personal learning notes, it is not a course. However, if you're curious, let's study together.",
  keywords:
    'frontend developer, software engineer, react js, javascript, typescript, dhany hidayat blogs, dhany hidayat learn module',
  alternates: {
    canonical: `${process.env.DOMAIN}/learn`
  }
};

const PAGE_TITLE = 'Learn';
const PAGE_DESCRIPTION =
  "It is my own personal learning notes; it is not a course. However, if you're curious, let's study together.";
const filteredContents = LEARN_CONTENTS.filter(content => content.is_show) || [];

export default function LearnPage() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <LearnModule contents={filteredContents} />
      </Container>
    </>
  );
}
