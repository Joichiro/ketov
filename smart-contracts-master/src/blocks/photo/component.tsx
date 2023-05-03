import './styles.scss';
import { useTranslation } from 'react-i18next';
import photoMobileJpg from '../../constants/images/photo_mobile.jpg';
import photoJpg from '../../constants/images/photo.jpg';

export default function Photo() {
  const { t } = useTranslation('photo');

  return (
    <div className="photo" id="photo">
      <picture>
        <source
          type="image/jpeg"
          srcSet={`${photoMobileJpg} 1x, ${photoJpg} 2x`}
        />
        <img
          src={photoJpg}
          alt={t('photoAlt') as string}
        />
      </picture>
    </div>
  );
}
