import { useCallback, useEffect, useRef, useState } from 'react';

type ScrollHook<T extends HTMLElement> = {
  carouselRef: React.RefObject<T>;
  handleScroll: () => void;
};

const useScroll = <T extends HTMLElement>(): ScrollHook<T> => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<T>(null);

  useEffect(() => {
    const element = carouselRef.current;
    if (element) {
      element.scrollLeft = scrollLeft;
    }
  }, [scrollLeft]);

  const handleScroll = useCallback(() => {
    const element = carouselRef.current;
    if (element) {
      setScrollLeft(element.scrollLeft);
    }
  }, []);

  return { carouselRef, handleScroll };
};

export default useScroll;
