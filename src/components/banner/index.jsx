import Header from "../header";
import "./style.css";
import constants from "../../constants/constants";

export default function Banner() {
  return (
    <section className="container__banner_box">
      <Header />
      <div className="text__banner_welcome">
        <div className="container__text_content_welcome_banner">
          <span className="text_content_welcome_top">
            {constants.BANNER.WELCOME_TO}
          </span>
          <div className="text__content_welcome_center">
            <div className="container__welcome_text_part_1">
              Hotel{" "}
              <span className="logotype_text_content">
                <span>{constants.LOGO.PART_1}</span>
                <span>{constants.LOGO.PART_2}</span>
              </span>
            </div>
            <div className="container__welcome_text_part_2">
              {constants.BANNER.LOCATION}
            </div>
          </div>
          <span className="text_content_welcome_bottom">
            {constants.BANNER.DESCRIPTION}
          </span>
          <div className="container__buttons_banner_welcome">
            <div className="container__bottom_panel_buttons">
              <div className="container__button_banner">
                <button className="button__with_bottom_content_banner">
                  {constants.BUTTONS.BOOK_NOW}
                </button>
              </div>
              <div className="container__button_banner">
                <button className="button__with_bottom_content_banner">
                  {constants.BUTTONS.EXPLORE_MORE}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}