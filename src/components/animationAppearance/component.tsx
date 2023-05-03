import { ReactNode } from 'react';

import './styles.scss';
import { useIntersecting } from '../../hooks/intersecting.hooks';

interface Props {
  type?: 'transformX' | '-transformX' | 'opacity' | 'none';
  children: ReactNode;
}

export default function Appearance(props: Props) {
  const { ref } = useIntersecting('appearance__animation');

  return (
    <div
      className="appearance"
    >
      <div
        data-animation={props.type || 'none'}
        className="appearance__container"
        ref={ref}
      >
        {props.children}
      </div>
    </div>
  );
}
