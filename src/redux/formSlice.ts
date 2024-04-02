import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  email: string;
  password: string;
}

const initialState: FormState = {
  email: "",
  password: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    getsubmitlogin: (state, action: PayloadAction<FormState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      console.log(action);
      console.log(state);
    },
  },
});

export const { getsubmitlogin } = formSlice.actions;
export default formSlice.reducer;
