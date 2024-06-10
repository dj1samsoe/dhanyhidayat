import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const formatBlogSlug = (slug: string) => slug?.slice(0, -5);

export const formatDate = (date: string, type = 'MMMM dd, yyyy') => {
  const formattedDate = format(utcToZonedTime(parseISO(date), 'Asia/Jakarta'), type);
  return formattedDate;
};

export const removeHtmlTags = (html: string) => {
  if (typeof DOMParser !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  } else {
    return html;
  }
};

export const formatExcerpt = (content: string, maxLength = 100) => {
  const cleanedContent = removeHtmlTags(content);

  if (cleanedContent.length <= maxLength) {
    return cleanedContent;
  }

  const trimmed = cleanedContent.substring(0, maxLength).replace(/\s+\S*$/, '');

  return trimmed + (cleanedContent.length > maxLength ? '...' : '');
};
