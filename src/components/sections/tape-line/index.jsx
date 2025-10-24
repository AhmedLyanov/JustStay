import './style.css';
import constants from '../../../constants/constants';

export default function Tape() {
  return (
    <div className="container__tape_line">
      {constants.STATS.ITEMS.map((item, index) => (
        <div key={index} className="container__element_tape_counter">
          <div className="container__number_counter">
            <span className="number_data_tape">{item.value}</span>
          </div>
          <div className="container__description_tape_counter">
            <span className="text_information_tape">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
