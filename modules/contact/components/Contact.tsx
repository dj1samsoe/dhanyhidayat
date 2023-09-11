import Breakline from '@/common/components/elements/Breakline';

import BookACall from './BookACall';
import SocialMediaList from './SocialMediaList';

const Contact = () => {
  return (
    <section className="space-y-6">
      <SocialMediaList />
      <Breakline />
      <BookACall />
      <Breakline />
    </section>
  );
};

export default Contact;
