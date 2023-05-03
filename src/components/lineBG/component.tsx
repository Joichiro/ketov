import './styles.scss';
import {
  CSSProperties, ReactNode, useEffect, useState,
} from 'react';

interface Props {
  spaceBetweenLines: number | Record<number, number>;
  lineHeight: CSSProperties['height'];
  children: ReactNode
}

export default function LineBG(props: Props) {
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    function resize() {
      let count;

      if (typeof props.spaceBetweenLines === 'number') {
        count = window.innerWidth / props.spaceBetweenLines;
      } else {
        const spaceBetweenLines = Object.entries(props.spaceBetweenLines)
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .find((it) => window.innerWidth > Number(it[0])) || [0, 0];

        count = window.innerWidth / spaceBetweenLines[1];
      }

      setLineCount(Math.floor(count));
    }

    resize();

    window.addEventListener('resize', resize);

    /* eslint-disable consistent-return */
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [props.spaceBetweenLines]);

  return (
    <div className="lineBG">
      <div
        hidden
        style={{
          height: props.lineHeight,
        }}
        className="lineBG__line"
      >
        {[...Array(lineCount).keys()].map((it) => (
          <div
            key={it}
          />
        ))}
      </div>
      <div className="lineBG__container">
        {props.children}
      </div>
    </div>
  );
}
