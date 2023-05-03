import './styles.scss';
import { useTranslation } from 'react-i18next';
import Nav from '../nav';
import { LOGO } from '../../constants/links.constants';

export default function Header() {
  const { t } = useTranslation('header');

  return (
    <header className="header">
      <a
        className="header__name"
        href={LOGO}
      >
        {t('name')}
      </a>
      <div className="header__nav-wrapper">
        <Nav />
      </div>
    </header>
  );
}
