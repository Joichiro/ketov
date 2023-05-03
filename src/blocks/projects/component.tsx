import './styles.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Item from './item';
import { useAbsoluteSizes } from '../../hooks/styles.hooks';
import Appearance from '../../components/animationAppearance';

export default function Projects() {
  const [activeItem, setActiveItem] = useState(0);
  const { t } = useTranslation('projects');
  const { listRef } = useAbsoluteSizes<HTMLUListElement>('li');

  const items = t('items', {
    returnObjects: true,
  }) as {title: string, text: string | string[]}[];

  return (
    <div className="projects" id="projects">

      <Appearance type="transformX">
        <h2>{t('title')}</h2>
      </Appearance>

      <Appearance type="transformX">
        <ul>
          {items.map((it, i) => (
            <Item
              key={it.title}
              title={it.title}
              text={it.text}
              isActive={activeItem === i}
              onClick={() => setActiveItem(i)}
            />
          ))}
        </ul>
      </Appearance>

      <Appearance type="-transformX">
        <ul className="projects__cub" hidden ref={listRef}>
          {items.map((it, i) => (
            <li data-active={activeItem === i}>
              <div className="projects__info">
                {Array.isArray(it.text) ? (
                  it.text.map((p) => (
                    <p key={p}>{p}</p>
                  ))
                ) : (
                  <p>{it.text}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Appearance>
    </div>
  );
}
