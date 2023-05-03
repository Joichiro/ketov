import './styles.scss';
import { useTranslation } from 'react-i18next';
import { HIRE } from '../../constants/links.constants';
import Appearance from '../../components/animationAppearance';

export default function Example() {
  const { t } = useTranslation('example');

  const title = t('title', {
    returnObjects: true,
  }) as string[];

  return (
    <Appearance type="opacity">
      <section className="example" id="example">
        <p>{t('subtitle')}</p>
        <h2>
          {title.map((it) => (
            <span key={it}>{it}</span>
          ))}
        </h2>
        <a
          target="_blank"
          rel="noreferrer"
          href={HIRE}
        >
          {t('hire')}
        </a>
      </section>
    </Appearance>
  );
}
