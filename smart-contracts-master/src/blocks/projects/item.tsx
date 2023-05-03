import './styles.scss';
import { useEffect } from 'react';
import { useAccordion } from '../../hooks/accordion.hooks';

interface Props {
  title: string;
  text: string | string[];
  isActive: boolean;
  onClick: () => void;
}

export default function Item(props: Props) {
  const { accordionRef, setIsOpen, isOpen } = useAccordion(props.isActive);

  useEffect(() => {
    setIsOpen(props.isActive);
  }, [props.isActive]);

  return (
    <li data-active={isOpen}>
      <button onClick={props.onClick} type="button">
        <h3>{props.title}</h3>
      </button>
      <div className="projects__info" ref={accordionRef}>
        {Array.isArray(props.text) ? (
          props.text.map((p) => (
            <p key={p}>{p}</p>
          ))
        ) : (
          <p>{props.text}</p>
        )}
      </div>
    </li>
  );
}
