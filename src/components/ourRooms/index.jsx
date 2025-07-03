import "./style.css";
import cardImage from "../../assets/media/test.jpg";

export default function OurRooms() {
  const rooms = [
    { title: "Junior Suite", price: "$150.00 / per night" },
    { title: "Deluxe Room", price: "$200.00 / per night" },
    { title: "Executive Suite", price: "$250.00 / per night" }
  ];

  return (
    <div className="container__our_rooms">
      <div className="container__title_our_rooms">
        <h2 className="title__our_rooms">
          <span>Our Rooms</span>
        </h2>
      </div>
      
      <div className="main_title__our_rooms">
        <span className="text__main_title_our_rooms">Explore Our Rooms</span>
      </div>
      
      <div className="container__list_of_cards_rooms">
        {rooms.map((room, index) => (
          <article key={index} className="room_card">
            <div className="room_card__image-container">
              <img
                src={cardImage}
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