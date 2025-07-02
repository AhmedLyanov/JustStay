import "./style.css";
import constants from "../../constants/constants";

export default function Header() {
  return (
    <div className="container__header_box">
      <div className="main_container__header">
        <div className="container__logotype_header">
          <a href="/" className="logo-link">
            <h1 className="logo-text">
              <span className="logo-part-1">{constants.LOGO.PART_1}</span>
              <span className="logo-part-2">{constants.LOGO.PART_2}</span>
            </h1>
          </a>
        </div>
        <div className="navigation__box_buttons">
          <div className="container__buttons_nav">
            <div className="container__text_button_nav">
              <span className="button__nav_text">{constants.NAV.HOME}</span>
            </div>
            <div className="container__text_button_nav">
              <span className="button__nav_text">{constants.NAV.ABOUT}</span>
            </div>
            <div className="container__text_button_nav">
              <span className="button__nav_text">{constants.NAV.ROOMS}</span>
            </div>
            <div className="container__text_button_nav">
              <span className="button__nav_text">{constants.NAV.SERVICES}</span>
            </div>
            <div className="container__text_button_nav">
              <span className="button__nav_text">{constants.NAV.CONTACT}</span>
            </div>
          </div>
        </div>
        <div className="container__button_exit">
          <div className="container__exit_text_header">
            <span className="text__exit_header">{constants.BUTTONS.LOGOUT}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
