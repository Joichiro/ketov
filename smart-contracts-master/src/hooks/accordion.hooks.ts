import { useEffect, useRef, useState } from 'react';

export function useAccordion(initShown = false) {
  const [isOpen, setIsOpen] = useState(initShown);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (accordionRef.current == null) return;

    function resize() {
      if (accordionRef.current == null) return;

      accordionRef.current.style.overflow = 'hidden';

      if (isOpen) {
        accordionRef.current.style.maxHeight = `${accordionRef.current.scrollHeight}px`;
      } else {
        accordionRef.current.style.maxHeight = '0';
      }
    }

    resize();

    window.addEventListener('resize', resize);

    /* eslint-disable consistent-return */
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [isOpen, initShown]);

  return {
    accordionRef,
    isOpen,
    setIsOpen,
  };
}
