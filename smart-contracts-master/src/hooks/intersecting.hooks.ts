import { useEffect, useRef } from 'react';

export function useIntersecting(activeClassName: string) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current == null) return;

    ref.current.classList.remove(activeClassName);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (ref.current == null) return;

        if (entry.isIntersecting) {
          ref.current.classList.add(activeClassName);
          return;
        }

        ref.current.classList.remove(activeClassName);
      });
    });

    observer.observe(ref.current);
  }, [activeClassName]);

  return { ref };
}
