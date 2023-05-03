import './styles.scss';
import { useTranslation } from 'react-i18next';
import userMobileJpg from '../../constants/images/user_mobile.jpg';
import userJpg from '../../constants/images/user.jpg';
import { TG } from '../../constants/links.constants';
import { ReactComponent as SvgTG } from '../../constants/images/icons/socials/tg.svg';
import Appearance from '../../components/animationAppearance';

export default function About() {
  const { t } = useTranslation('about');

  return (
    <Appearance type="opacity">
      <section className="about" id="about">
        <header>
          <p>{t('subtitle')}</p>
          <h1>{t('title')}</h1>
        </header>
        <div>
          <div className="about__container">
            <picture>
              <source
                type="image/jpeg"
                srcSet={`${userMobileJpg} 1x, ${userJpg} 2x`}
              />
              <img
                src={userJpg}
                alt={t('userAlt') as string}
              />
            </picture>
            <a
              className="about__tg"
              href={TG}
            >
              <SvgTG height={15} />
              {TG}
            </a>
          </div>
          <p className="about__description">
            {t('description')}
          </p>
        </div>
      </section>
    </Appearance>
  );
}
