import './style.css';
import history from '../../../assets/media/history.png';
import constants from '../../../constants/constants';

export default function About() {
  return (
    <div className="section__about_us">
      <div className="container__title_about_us">
        <h2 className="title_with_short_lines">
          <span>{constants.ABOUT.TITLE}</span>
        </h2>
      </div>

      <article className="container__history_chapter">
        <div className="container__image_about">
          <img src={history} alt="JustStay history" />
        </div>
        <div className="container__text_about__information">
          <div className="container__text_about">
            <div className="title_history_section">
              {constants.ABOUT.HISTORY_TITLE}
              {'  '}
              <span className="logotype_text_content_black">
                <span>{constants.LOGO.PART_1}</span>
                <span>{constants.LOGO.PART_2}</span>
              </span>
            </div>

            <div className="container__description_history">
              <p className="history__description_main">
                {constants.ABOUT.HISTORY_DESCRIPTION_MAIN}
              </p>
              <p className="history__description_bottom">
                {constants.ABOUT.HISTORY_DESCRIPTION_BOTTOM}
              </p>
            </div>
          </div>
          <div className="button_continer_test">
            <div className="container__button_read_history">
              <button className="buttOn__read_history">
                {constants.BUTTONS.READ_MORE}
              </button>
            </div>
          </div>
        </div>
      </article>

      <article className="container__history_chapter">
        <div className="container__image_about">
          <img src={history} alt="JustStay history" />
        </div>
        <div className="container__text_about__information">
          <div className="container__text_about">
            <div className="title_history_section">
              {constants.ABOUT.WHY_CHOOSE_US_TITLE}
            </div>

            <div className="container__description_history">
              <p className="history__description_main">
                {constants.ABOUT.WHY_CHOOSE_US_MAIN}
              </p>
              <p className="history__description_bottom">
                {constants.ABOUT.WHY_CHOOSE_US_BOTTOM}
              </p>
            </div>
          </div>
          <div className="button_continer_test">
            <div className="container__button_read_history">
              <button className="buttOn__read_history">
                {constants.BUTTONS.READ_MORE}
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
