"use client";
import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

const useIsMobile = () => {
  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(false); // Set an initial value

  useEffect(() => {
    // Check if windowSize is defined and has width property
    if (windowSize && windowSize.width !== undefined) {
      setIsMobile(windowSize.width < 1024);
    }
  }, [windowSize]);

  return isMobile;
};

export default useIsMobile;
