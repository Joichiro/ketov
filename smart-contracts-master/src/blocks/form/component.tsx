import './styles.scss';
import { useTranslation } from 'react-i18next';
import Appearance from '../../components/animationAppearance';

export default function Form() {
  const { t } = useTranslation('form');

  return (

    <Appearance type="opacity">
      <section className="form">
        <h2>{t('title')}</h2>

        <iframe
          title="form"
          src="https://paragraph.xyz/@ketov.eth/embed"
          width="480"
          height="480"
          frameBorder="0"
          scrolling="no"
        />
      </section>
    </Appearance>
  );
}
