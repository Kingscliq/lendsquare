import { useCallback } from 'react';
import { login, logout } from 'slices/authSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store/types';

export const auth = (state: RootState) => state.auth;

export const useAlertActions = () => {
  const dispatch = useAppDispatch();
  return {
    login: useCallback(() => dispatch(login()), [dispatch]),
    logout: useCallback(() => dispatch(logout()), [dispatch]),
  };
};

export const useAuth = () => {
  return useAppSelector(auth);
};
