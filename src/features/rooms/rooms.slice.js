import { createSlice } from '@reduxjs/toolkit';

const createCard = () => {
  try {
    const data = localStorage.getItem('rooms');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

const saveCard = rooms => {
  try {
    localStorage.setItem('rooms', JSON.stringify(rooms));
  } catch (error) {
    console.error(error);
  }
};

const initial = createCard();

const roomsSlice = createSlice({
  name: 'rooms',
  initialState: initial,
  reducers: {
    addRoom: (state, action) => {
      const newRoom = {
        id: Date.now().toString(),
        ...action.payload,
      };
      state.push(newRoom);
      saveCard(state);
    },
  },
});
export default roomsSlice.reducer;
export const { addRoom } = roomsSlice.actions;
