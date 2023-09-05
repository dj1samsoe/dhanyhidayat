'use client';

// interface EmbedProps {
//   html: string | TrustedHTML;
// }
// export default function Embed({ html }: EmbedProps) {
//   return <div dangerouslySetInnerHTML={{ __html: html }} />;
// }
import React, { useEffect } from 'react';

export default function Embed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@dj1samsoe__"
      data-unique-id="dj1samsoe__"
      data-embed-type="creator"
      style={{ maxWidth: '780px', minWidth: '288px' }}
    >
      <section>
        <a target="_blank" href="https://www.tiktok.com/@dj1samsoe__?refer=creator_embed">
          @dj1samsoe__
        </a>
      </section>
    </blockquote>
  );
}
