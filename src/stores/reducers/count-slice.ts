import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count-slice',
  initialState,
  reducers: {
    countAction: state => {
      state.count = 0;
    },
    countActionUp: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    countActionDown: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

export const { countAction, countActionUp, countActionDown } = countSlice.actions;

export default countSlice.reducer;
