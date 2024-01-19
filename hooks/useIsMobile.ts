import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

const useIsMobile = () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 1024);

  useEffect(() => {
    setIsMobile(width < 1024);
  }, [width]);

  return isMobile;
};

export default useIsMobile;
