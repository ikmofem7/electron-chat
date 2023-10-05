import { createSlice } from "@reduxjs/toolkit";
import { fetchChats } from "../api/chats";

const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    items: [],
  },
  reducers: {
    addChats: (state, action) => {
      state.items = action.payload;
    },
  },
});
const chatsReducer = chatsSlice.reducer;
const chatsActions = chatsSlice.actions;
const { addChats } = chatsActions;
const asyncFetchChats = () => async (dispatch) => {
  const data = await fetchChats();
  dispatch(addChats(data));
};

export { asyncFetchChats, chatsReducer };
