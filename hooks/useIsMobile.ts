import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

const useIsMobile = () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false); // Set an initial value

  useEffect(() => {
    // Check if width is defined before updating state
    if (width !== undefined) {
      setIsMobile(width < 1024);
    }
  }, [width]);

  return isMobile;
};

export default useIsMobile;
