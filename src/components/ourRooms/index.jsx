import "./style.css";
import constants from "../../constants/constants";

export default function OurRooms() {
  return (
    <div className="container__our_rooms">
      <div className="container__title_our_rooms">
        <h2 className="title__our_rooms">
          <span>{constants.ROOMS.TITLE}</span>
        </h2>
      </div>
      
      <div className="main_title__our_rooms">
        <span className="text__main_title_our_rooms">
          {constants.ROOMS.SUBTITLE}
        </span>
      </div>
      
      <div className="container__list_of_cards_rooms">
        {constants.ROOMS.ROOMS_LIST.map((room, index) => (
          <article key={index} className="room_card">
            <div className="room_card__image-container">
              <img
                src={room.image}
                alt={`${room.title} Room`}
                loading="lazy"
                className="room_card__image"
              />
            </div>
            <div className="room_card__info">
              <h3 className="room_card__title">{room.title}</h3>
              <p className="room_card__price">{room.price}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}