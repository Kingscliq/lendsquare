import { IUserData } from '@/types/data-table';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  generatedData: Array<IUserData>;
}

const initialState: DataState = {
  generatedData: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Array<IUserData>>) => {
      state.generatedData = action.payload;
    },
    updateData: (state, action: PayloadAction<Array<IUserData>>) => {
      state.generatedData = action.payload;
    },
    clearData: state => {
      state.generatedData = [];
    },
  },
});

export const { setData, clearData, updateData } = dataSlice.actions;

export default dataSlice.reducer;
