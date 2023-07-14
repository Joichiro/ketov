import "./styles.scss";
import { useTranslation } from "react-i18next";

import { ARTICLES, EMAIL, LOGO, TG } from "../../constants/links.constants";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="footer">
      <a className="footer__name" href={LOGO}>
        {t("name")}
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="footer__articles"
        href={ARTICLES}
      >
        {t("articles")}
      </a>
      <a href={`${TG}`} className="footer__email">
        {"Message me"}
      </a>
    </footer>
  );
}
