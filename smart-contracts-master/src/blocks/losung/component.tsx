import './styles.scss';
import { useTranslation } from 'react-i18next';
import Appearance from '../../components/animationAppearance';

export default function Losung() {
  const { t } = useTranslation('losung');

  return (
    <Appearance type="opacity">
      <section className="losung" id="losung">
        <h2>{t('title')}</h2>
        <p>{t('description')}</p>
      </section>
    </Appearance>
  );
}
