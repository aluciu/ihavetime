import { createSlice } from '@reduxjs/toolkit';
import { createUser, loginWithGoogle, auth } from '../api/firebase';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

export const loginWithFirebase = () => async (dispatch) => {
  try {
    const currentUser = await loginWithGoogle();

    await createUser(currentUser.uid, currentUser.email, currentUser.name);

    dispatch(login(currentUser));
  } catch (error) {
    console.error(error);
  }
};

export const signOut = () => async (dispatch) => {
  dispatch(logout());
  auth.signOut();
}