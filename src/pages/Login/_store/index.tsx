import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const name = "login";
export interface userInfo {
  [key: string]: any
}

export interface res {
  code: number
  message: string
  msg: string
  token: string
  tokenExpired: number
  type: string
  uid: string,
  userInfo: userInfo
}

export const reducers = {
  increment: (state: any) => {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    state.value += 1;
  },
  decrement: (state: any) => {
    state.value -= 1;
  },
  incrementByAmount: (state: any, _: PayloadAction<any>) => {
    state.value += _.payload;
  },
  updateUserInfo: (state: any, _: PayloadAction<any>) => {
    state.user = _.payload;
  },
};

export const initialState = {
  value: 0,
  user: {
    uid: null
  }
};
export const loginSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const selectLogin = (state: any) => state[loginSlice.name]

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateUserInfo } = loginSlice.actions;
