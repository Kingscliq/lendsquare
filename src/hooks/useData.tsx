import { useCallback } from 'react';
import { setData, clearData } from 'slices/dataSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store/types';

export const auth = (state: RootState) => state.auth;

export const useDataActions = () => {

    
  const dispatch = useAppDispatch();
  return {
    setData: useCallback(() => dispatch(setData()), [dispatch]),
    clear: useCallback(() => dispatch(clearData()), [dispatch]),
  };
};

export const useAuth = () => {
  return useAppSelector(auth);
};
