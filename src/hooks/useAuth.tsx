import { useCallback } from 'react';
import { login, logout } from 'slices/authSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store/types';
import { IUser } from '@/types/dataTable';

// Selects the auth slice from the global state
export const auth = (state: RootState) => state.auth;

/**
 * @description Hook providing actions related to authentication for use in components.
 * @returns {Object} An object containing login and logout actions.
 */
export const useAlertActions = () => {
  const dispatch = useAppDispatch();

  return {
    /**
     * @description Action to perform a user login.
     */
    login: useCallback((user: IUser) => dispatch(login(user)), [dispatch]),

    /**
     * @description Action to perform a user logout.
     */
    logout: useCallback(() => dispatch(logout()), [dispatch]),
  };
};

/**
 * @description Hook for accessing authentication state from the global state.
 * @returns {Object} The auth slice of the global state.
 */
export const useAuth = () => {
  return useAppSelector(auth);
};
