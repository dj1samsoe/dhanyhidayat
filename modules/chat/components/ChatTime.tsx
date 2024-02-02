import { format, formatDistanceToNow, isToday } from 'date-fns';
import { useEffect, useState } from 'react';

interface ChatTimeProps {
  datetime: string;
}

const ChatTime = ({ datetime }: ChatTimeProps) => {
  const [formattedTime, setFormattedTime] = useState<string>(
    formatDistanceToNow(new Date(datetime), { addSuffix: true })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedTime(formatDistanceToNow(new Date(datetime), { addSuffix: true }));
    }, 60000);

    return () => clearInterval(interval);
  }, [datetime]);

  return (
    <div className="text-neutral-400 text-xs">
      {isToday(new Date(datetime)) ? formattedTime : format(new Date(datetime), 'dd/MM/yyyy, HH:mm')}
    </div>
  );
};

export default ChatTime;
