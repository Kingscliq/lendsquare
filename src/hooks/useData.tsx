import { useCallback } from 'react';
import { setData, clearData } from 'slices/dataSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store/types';
import { generateData } from '@utils/helpers';

export const users = (state: RootState) => state.data;

export const useDataActions = () => {
  const dispatch = useAppDispatch();

  const generatedData = generateData();

  return {
    setData: useCallback(
      () => dispatch(setData(generatedData)),
      [dispatch, generatedData]
    ),
    clear: useCallback(() => dispatch(clearData()), [dispatch]),
  };
};

export const useUsersData = () => {
  return useAppSelector(users);
};
