import { createSlice } from "@reduxjs/toolkit";
import {
  createUserProfile,
  logoutUser,
  onAuthStateChanges,
  registerUser,
} from "../api/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isChecking: false,
  },
  reducers: {
    register: () => {},
    setUser: (state, action) => {
      const { user, isChecking } = action.payload;
      state.user = user;
      state.isChecking = isChecking;
    },
  },
});
const authReducer = authSlice.reducer;
const { setUser } = authSlice.actions;

const asyncRegisterUser =
  ({ email, password, username, avatar }) =>
  async (dispatch) => {
    try {
      const response = await registerUser(email, password);
      console.log({ response });
      await createUserProfile({
        uid: "oops",
        username,
        email,
        avatar,
        joinedChats: [],
      });
      dispatch(asyncAuthStateChanged());
    } catch (error) {
      console.error(error);
    }
  };
const asyncAuthStateChanged = () => async (dispatch) => {
  dispatch(setUser({ user: null, isChecking: true }));
  try {
    const user = await onAuthStateChanges();
    dispatch(setUser({ user, isChecking: false }));
  } catch (error) {
    dispatch(setUser({ user: null, isChecking: false }));
    console.log({ error });
  }
};

const asyncLogoutUser = () => async (dispatch) => {
  try {
    const logout = await logoutUser();
    dispatch(asyncAuthStateChanged());
    debugger;
  } catch (error) {
    console.log({ error });
  }
};

export {
  authReducer,
  asyncRegisterUser,
  asyncAuthStateChanged,
  asyncLogoutUser,
};
