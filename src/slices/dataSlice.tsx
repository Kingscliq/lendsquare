import { IUserData } from '@/types/datatable';
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
    clearData: state => {
      state.generatedData = [];
    },
  },
});

export const { setData, clearData } = dataSlice.actions;
export const selectGeneratedData = (state: { data: DataState }) =>
  state.data.generatedData;

export default dataSlice.reducer;
