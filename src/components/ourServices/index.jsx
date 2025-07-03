import "./style.css";
import citySvg from "../../assets/media/city.png";
import stateSvg from "../../assets/media/state.png";
import food from "../../assets/media/food.png";
import event from "../../assets/media/event.png";
import gym from "../../assets/media/gym.png";

export default function OurServices() {
  const cards_buttons = [
    {
      logotype: { citySvg },
      title: "Rooms & Appartment",
      description: "Figma ipsum component variant main layer.",
    },
    {
      logotype: { stateSvg },
      title: "Sports & Gaming",
      description: "Figma ipsum component variant main layer.",
    },
    {
      logotype: { food },
      title: "Food & Resturant",
      description: "Figma ipsum component variant main layer.",
    },
    {
      logotype: { event },
      title: "Spa & Fitness",
      description: "Figma ipsum component variant main layer.",
    },
    {
      logotype: { gym },
      title: "Event & Party",
      description: "Figma ipsum component variant main layer.",
    },
    {
      logotype: "",
      title: "GYM & Yoga",
      description: "Figma ipsum component variant main layer.",
    },
  ];
  return (
    <div className="container__our_services">
      <div className="container__title_our_rooms">
        <h2 className="title__our_rooms">
          <span>Our Services</span>
        </h2>
      </div>

      <div className="main_title__our_rooms">
        <span className="text__main_title_our_rooms">Explore Our Services</span>
      </div>
      <div className="container__menu_services">
        {cards_buttons.map((service, index) => (
          <div className="container__card_service">
            <div className="container__service_card_information">
              <div className="image__service_logotype">
                <img src={service.logotype} alt="" />
              </div>
              <div className="container_service_text_data">
                <div className="title__service">
                  <h2>{service.title}</h2>
                </div>
                <div className="description__service">
                  <span>{service.description}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
