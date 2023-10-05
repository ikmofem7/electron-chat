import { configureStore } from "@reduxjs/toolkit";
import { chatsReducer } from "../reducer/chatsSlice";
import { authReducer } from "../reducer/authSlice";
const configStore = () => {
  const store = configureStore({
    reducer: {
      chats: chatsReducer,
      auth: authReducer,
    },
  });
  return store;
};
export default configStore;
