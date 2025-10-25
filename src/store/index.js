import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from '../features/rooms/rooms.slice';

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});
