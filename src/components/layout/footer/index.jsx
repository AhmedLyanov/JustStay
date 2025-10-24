import './style.css';
import constants from '../../../constants/constants';

export default function Footer() {
  return (
    <footer>
      <div className="container__main_content-footer">
        <div className="container__copyright_company">
          <div className="name__company">
            <h3>
              <span className="logotype_text_content_black">
                <span>{constants.LOGO.PART_1}</span>
                <span>{constants.LOGO.PART_2}</span>
              </span>
            </h3>
          </div>
          <div className="container__conclusion_info-footer">
            <div className="conclusion__text_company">
              {constants.FOOTER.COMPANY_DESCRIPTION}
            </div>
            <div className="text__company_communication-mail">
              {constants.FOOTER.COMPANY_EMAIL}
            </div>
          </div>
        </div>
        <div className="navigation__footer">
          <div className="control_container__footer_navigation">
            {[...Array(4)].map((_, index) => (
              <nav key={index} className="navigation__footer-main">
                <div className="container_title__footer_navigation">
                  <h4 className="title__navigation_footer-link">
                    {constants.FOOTER.NAVIGATION.TITLE}
                  </h4>
                </div>
                <ul className="list__navigation_footer-links">
                  {constants.FOOTER.NAVIGATION.LINKS.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.path}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
