import { useEffect, useRef } from 'react';

export function useAbsoluteSizes<T extends HTMLElement>(childrenSelector: keyof HTMLElementTagNameMap) {
  const listRef = useRef<T>(null);

  useEffect(() => {
    if (listRef.current == null) return;

    function resize() {
      if (listRef.current == null) return;
      let newHeight: number | undefined;
      let newWidth: number | undefined;
      const elements = listRef.current.querySelectorAll(childrenSelector);

      elements.forEach((it) => {
        const { height: currentHeight, width: currentWidth } = it.getBoundingClientRect();

        if (newHeight == null || currentHeight > newHeight) {
          newHeight = currentHeight;
        }

        if (newWidth == null || currentWidth > newWidth) {
          newWidth = currentWidth;
        }
      });

      listRef.current.style.height = `${newHeight}px`;
    }

    resize();

    window.addEventListener('resize', resize);

    /* eslint-disable consistent-return */
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [childrenSelector]);

  return {
    listRef,
  };
}
