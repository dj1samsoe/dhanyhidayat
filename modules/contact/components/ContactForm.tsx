'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { FiClock as ClockIcon } from 'react-icons/fi';

import Button from '@/common/components/elements/Button';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (response.status === 200) {
      alert('Message sent succesfully!');
      setIsLoading(false);
      // reset the form
      e.target.reset();
    }
    if (response.status === 500) {
      alert('Message failed to send!');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col flex-grow gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <input
            className="w-full py-2 px-3 rounded-md border border-neutral-200 focus:outline-none dark:border-neutral-700 dark:bg-[#4949492e] focus:border-neutral-500 dark:focus:border-neutral-200"
            type="text"
            placeholder="Name*"
            name="name"
            required
          />
          <input
            className="w-full py-2 px-3 rounded-md border border-neutral-200 focus:outline-none dark:border-neutral-700 dark:bg-[#4949492e] focus:border-neutral-500 dark:focus:border-neutral-200"
            type="email"
            placeholder="Email*"
            name="email"
            required
          />
        </div>
        <textarea
          className="w-full py-2 px-3 rounded-md border border-neutral-200 focus:outline-none dark:border-neutral-700 dark:bg-[#4949492e] focus:border-neutral-500 dark:focus:border-neutral-200"
          rows={5}
          placeholder="Message*"
          name="message"
          required
        />
        <Button
          className={clsx(
            'py-2.5 bg-neutral-800 dark:bg-gradient-to-l dark:from-teal-950 dark:to-teal-800 dark:text-white flex justify-center hover:bg-neutral-900 hover:scale-[101%]'
          )}
          type="submit"
          icon={<></>}
          data-umami-event="Send Contact Message"
          disabled={isLoading}
        >
          {isLoading ? 'Sending Message...' : 'Send Message'}
        </Button>
      </div>

      <div className="flex items-center gap-2 dark:text-neutral-400 my-5">
        <ClockIcon />
        <div className="text-sm">
          <span className="font-medium">Avg. response:</span> 1-2 Hours (Working Hours, GMT+7)
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
