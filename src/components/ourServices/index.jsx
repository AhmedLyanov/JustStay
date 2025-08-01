import "./style.css";
import citySvg from "../../assets/media/city.png";
import stateSvg from "../../assets/media/state.png";
import food from "../../assets/media/food.png";
import event from "../../assets/media/event.png";
import gym from "../../assets/media/gym.png";
import constants from "../../constants/constants";

const serviceIcons = [citySvg, stateSvg, food, event, gym, gym];

export default function OurServices() {
  return (
    <div className="container__our_services">
      <div className="container__title_our_rooms">
        <h2 className="title__our_rooms">
          <span>{constants.SERVICES.TITLE}</span>
        </h2>
      </div>

      <div className="main_title__our_rooms">
        <span className="text__main_title_our_rooms">
          {constants.SERVICES.SUBTITLE}
        </span>
      </div>
      <div className="container__menu_services">
        {constants.SERVICES.SERVICES_LIST.map((service, index) => (
          <div key={index} className="container__card_service">
            <div className="container__service_card_information">
              <div className="image__service_logotype">
                <img src={serviceIcons[index]} alt="Service Logotype" />
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