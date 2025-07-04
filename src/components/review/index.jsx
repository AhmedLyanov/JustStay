import './style.css'
import comma from '../../assets/media/quote-down.svg'
export default function Preview(){
    const peopleSays = [
        {name:"Rita", surname: "O'Conner", email: "Sandrine.Luettgen@gmail.com", description: "Nobis voluptatem magni doloribus voluptate culpa dolor est neque "},
        {name:"Woodrow", surname: "McCullough", email: "Idell.Hoppe86@yahoo.com", description: "Nobis voluptatem magni doloribus voluptate culpa dolor est neque "},
        {name:"Veronica ", surname: "Hessel", email: "Valentin.Homenick@gmail.com", description: "Nobis voluptatem magni doloribus voluptate culpa dolor est neque "},
        {name:"George", surname: "Heaney", email: "Liliana.Howell85@hotmail.com", description: "Nobis voluptatem magni doloribus voluptate culpa dolor est neque "}
    ]

    return(
        <section className="preview__container">
            <div className="title__preview_container-text">
                <div className="contaner__subtitle_preview">
                    <span className="subtitle__preview_container-span">Testimonial</span>
                </div>
                
                <h1 className="title__preview_container">What People Say?</h1>
            </div>
            <div className="container__reviews-cards">
                {peopleSays.map((review, index) => (
                    <article className="card__review">
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
                            <h2>{review.name} {review.surname}</h2>
                        </div>
                        <div className="email__review_sender">
                            <span>{review.email}</span>
                        </div>
                    </div>
                </article>
                ))}
            </div>
        </section>
    )
}