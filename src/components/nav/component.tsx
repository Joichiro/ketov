import './styles.scss';
import { useTranslation } from 'react-i18next';
import { HIRE, LINKED } from '../../constants/links.constants';

export default function Nav() {
  const { t } = useTranslation('header');

  return (
    <p className="header-nav">
      <a
        target="_blank"
        rel="noreferrer"
        href={HIRE}
      >
        {t('links.hire')}
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={LINKED}
      >
        {t('links.linked')}
      </a>
    </p>
  );
}
