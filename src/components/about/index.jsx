import "./style.css";
import history from "../../assets/media/hsitroy_2.jpg";
import constants from "../../constants/constants";

export default function About() {
  return (
    <section className="section__about_us">
      <div className="container__title_about_us">
        <h2 className="title_with_short_lines">
          <span>About Us</span>
        </h2>
      </div>

      <article className="container__history_chapter">
        <div className="container__image_about">
          <img src={history} alt="JustStay history" />
        </div>
        <div className="container__text_about">
          <div className="title_history_section">
            {" "}
            History of{"  "}
            <span className="logotype_text_content_black">
              <span>{constants.LOGO.PART_1}</span>
              <span>{constants.LOGO.PART_2}</span>
            </span>
          </div>

          <div className="container__description_history">
            <p className="history__description_main">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem repellendus, dicta facilis eligendi voluptate sequi
              laudantium quibusdam, cum dolorum nostrum dignissimos non nobis
              corporis, voluptatibus illo facere veniam neque atque.
            </p>
            <p className="history__description_bottom">
              Autem temporibus, neque voluptas officiis molestiae. At vero eos
              et accusamus et iusto odio dignissimos ducimus. But hey, at least
              you’re not stuck in traffic, or worse, listening to a never-ending
              sales pitch, right?
            </p>
          </div>
        </div>
      </article>

      <article className="container__history_chapter">
        <div className="container__image_about">
          <img src={history} alt="JustStay history" />
        </div>
        <div className="container__text_about">
          <div className="title_history_section">
            <span>Why choose us?</span>
          </div>

          <div className="container__description_history">
            <p className="history__description_bottom">
              Autem temporibus, neque voluptas officiis molestiae. At vero eos
              et accusamus et iusto odio dignissimos ducimus. But hey, at least
              you’re not stuck in traffic, or worse, listening to a never-ending
              sales pitch, right?
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
