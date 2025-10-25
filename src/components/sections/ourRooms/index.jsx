import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRoom } from '../../../features/rooms/rooms.slice';
import './style.css';
import constants from '../../../constants/constants';

export default function OurRooms() {
  const dispatch = useDispatch();
  const customRooms = useSelector(state => state.rooms);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim() || !price.trim() || !image.trim()) return;

    dispatch(
      addRoom({
        title,
        price,
        image,
      })
    );

    setTitle('');
    setPrice('');
    setImage('');
    setShowForm(false);
  };

  const allRooms = [...constants.ROOMS.ROOMS_LIST, ...customRooms];

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

      <button
        type="button"
        className="add-room-btn"
        onClick={() => setShowForm(!showForm)}
        style={{ margin: '1rem 0', padding: '8px 16px' }}
      >
        {showForm ? 'Отменить' : 'Добавить комнату'}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="add-room-form"
          style={{ margin: '1rem 0' }}
        >
          <input
            type="text"
            placeholder="Название комнаты"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Цена"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="URl"
            value={image}
            onChange={e => setImage(e.target.value)}
            required
          />
          <button type="submit">Сохранить</button>
        </form>
      )}

      <div className="container__list_of_cards_rooms">
        {allRooms.map((room, index) => (
          <article key={room.id || index} className="room_card">
            <div className="room_card__image-container">
              <img
                src={room.image}
                alt={`${room.title} Room`}
                loading="lazy"
                className="room_card__image"
                onError={e => {
                  e.target.src =
                    'https://avatars.mds.yandex.net/i?id=603b965ba9233d1993a9dcc610fd609c_l-5498038-images-thumbs&n=13';
                }}
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
