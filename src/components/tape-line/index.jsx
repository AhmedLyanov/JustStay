import './style.css'

export default function Tape(){
    return(
        <div className="container__tape_line">
            <div className="container__element_tape_counter">
                <div className="container__number_counter">
                    <span className="number_data_tape">8</span>
                </div>
                <div className="container__description_tape_counter">
                    <span className="text_information_tape">
                        Years of Service
                    </span>
                </div>
            </div>
            <div className="container__element_tape_counter">
                <div className="container__number_counter">
                    <span className="number_data_tape">459</span>
                </div>
                <div className="container__description_tape_counter">
                    <span className="text_information_tape">
                        Sq. Meter Area
                    </span>
                </div>
            </div>
            <div className="container__element_tape_counter">
                <div className="container__number_counter">
                    <span className="number_data_tape">50</span>
                </div>
                <div className="container__description_tape_counter">
                    <span className="text_information_tape">
                        Nice Rooms
                    </span>
                </div>
            </div>
            <div className="container__element_tape_counter">
                <div className="container__number_counter">
                    <span className="number_data_tape">3786</span>
                </div>
                <div className="container__description_tape_counter">
                    <span className="text_information_tape">
                        Happy Visitors
                    </span>
                </div>
            </div>
        </div>
    )
}