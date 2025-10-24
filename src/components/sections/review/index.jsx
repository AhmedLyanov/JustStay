import './style.css';
import comma from '../../assets/media/quote-down.svg';
import constants from '../../constants/constants';

export default function Preview() {
  return (
    <section className="preview__container">
      <div className="title__preview_container-text">
        <div className="contaner__subtitle_preview">
          <span className="subtitle__preview_container-span">
            {constants.TESTIMONIALS.SUBTITLE}
          </span>
        </div>

        <h1 className="title__preview_container">
          {constants.TESTIMONIALS.TITLE}
        </h1>
      </div>
      <div className="container__reviews-cards">
        {constants.TESTIMONIALS.REVIEWS.map((review, index) => (
          <article key={index} className="card__review">
            <div className="container__information-review">
              <div className="review__logo-svg">
                <picture>
                  <img src={comma} alt="Comma review" />
                </picture>
              </div>
              <div className="review__description-text">
                <p>{review.description}</p>
              </div>
              <div className="name__review_sender">
                <h2>
                  {review.name} {review.surname}
                </h2>
              </div>
              <div className="email__review_sender">
                <span>{review.email}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
