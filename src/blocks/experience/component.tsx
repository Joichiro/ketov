import './styles.scss';
import { useTranslation } from 'react-i18next';
import Appearance from '../../components/animationAppearance';

export default function Experience() {
  const { t } = useTranslation('experience');

  const info = t('info', {
    returnObjects: true,
  }) as string[];

  return (
    <section className="experience">
      <Appearance type="transformX">
        <h2>{t('title')}</h2>
      </Appearance>
      <Appearance type="-transformX">
        <div className="experience__container">
          <p>{t('subtitle')}</p>
          <div className="experience__info">
            {info.map((it) => (
              <p key={it}>
                {it}
              </p>
            ))}
          </div>
        </div>
      </Appearance>
    </section>
  );
}
