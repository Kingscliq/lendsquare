// Import necessary types and React hooks
import { FilterQuery, UserFilterType } from '@/types/data-table';
import React, { useCallback, useState } from 'react';
import { useDataActions, useUsersData } from './useData';

// Define initial state for filters
const initialState: FilterQuery = {
  organisation: '',
  username: '',
  email: '',
  date: '',
  phone_number: '',
  status: '',
  search_string: '',
};

// Define actions that can be dispatched to modify the state
type Action =
  | {
      type: 'SET_FILTER';
      payload: { field: keyof FilterQuery; value: string | number };
    }
  | { type: 'RESET_STATE' }
  | {
      type: 'SEARCH_USER';
      payload: string;
    };

/**
 * @description Reducer function to handle state modifications based on actions.
 * @param {FilterQuery} state - The current state of filters.
 * @param {Action} action - The action to be performed on the state.
 * @returns {FilterQuery} The updated state after applying the action.
 */

function UserReducer(state: FilterQuery, action: Action): FilterQuery {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case 'SEARCH_USER':
      return {
        ...state,
        search_string: action.payload,
      };
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
}

/**
 * @description Custom hook for managing filters and interacting with user data.
 * @returns {Object} An object containing relevant data and functions.
 */
export const useFilters = () => {
  // Use reducer to manage state changes for filters
  const [filters, dispatch] = React.useReducer(UserReducer, initialState);
  const [_query, setQuery] = React.useState(() => ({
    ...filters,
  }));

  const { updateData } = useDataActions();
  const [filtersModal, setFilterModal] = useState<boolean>(false);

  /**
   * @description Function to set individual filters.
   * @param {UserFilterType} payload - The payload containing filter information.
   */
  const setFilter = React.useCallback(
    (payload: UserFilterType) => {
      dispatch({ type: 'SET_FILTER', payload });
    },
    [dispatch]
  );

  const resetFilter = React.useCallback(() => {
    dispatch({ type: 'RESET_STATE' });
  }, [dispatch]);

  /**
   * @description Function to update search filter.
   * @param {string} search - The search string to filter by.
   */
  const searchFilter = React.useCallback((search: string) => {
    dispatch({
      type: 'SEARCH_USER',
      payload: search,
    });
  }, []);

  // Get user data using custom hook
  const user = useUsersData();

  /**
   * @description Function to filter user data based on provided parameters.
   * @param {FilterQuery} params - The parameters to filter user data by.
   * @returns {Array} An array of filtered user data.
   */
  const filterUsers = (params: FilterQuery) => {
    const areAllValuesEmpty = Object.values(params).every(
      value => value === ''
    );
    if (areAllValuesEmpty) {
      return user.generatedData;
    }

    return user.generatedData.filter(item => {
      return Object.entries(params).every(
        ([key, value]) => value === '' || item[key] === value
      );
    });
  };

  /**
   * @description Function to get active users from filtered data.
   * @returns {number} The count of active users.
   */
  const _activeUsers = () =>
    user.generatedData.filter(item => item.status === 'active').length;

  /**
   * @description Function to get users with a loan from filtered data.
   * @returns {number} The count of users with a loan.
   */
  const _usersWithLoan = () =>
    user.generatedData.filter(item => item.withLoan).length;

  /**
   * @description Function to get users with savings from filtered data.
   * @returns {number} The count of users with savings.
   */
  const _usersWithSavings = () =>
    user.generatedData.filter(item => item.withSavings).length;

  /**
   * @description Function to get a single user based on ID.
   * @param {number} id - The ID of the user to retrieve.
   * @returns {Object|null} The user object if found, or null if not found.
   */
  const getSingleUsers = (id: number) => {
    return user.generatedData.find(item => {
      return item.id === id;
    });
  };

  const changeUserStatus = useCallback(
    (
      userId: number,
      newStatus: 'active' | 'inactive' | 'blacklisted' | 'pending'
    ) => {
      // Find the index of the user with the given ID in the array
      const userIndex = user.generatedData.findIndex(
        user => user.id === userId
      );
      if (userIndex !== -1) {
        const updatedUsers = [
          ...user.generatedData.slice(0, userIndex),
          { ...user.generatedData[userIndex], status: newStatus },
          ...user.generatedData.slice(userIndex + 1),
        ];

        updateData(updatedUsers);
        console.log({ updatedUsers });
        return updatedUsers;
      }

      // If the user is not found, return the original array
      return user.generatedData;
    },
    [user.generatedData, updateData]
  );

  // Calculate statistics based on filtered user data
  const filteredData = filterUsers(_query);
  const activeUsers = _activeUsers();
  const usersWithLoan = _usersWithLoan();
  const usersWithSavings = _usersWithSavings();

  // Return an object containing relevant data and functions
  return {
    filters,
    setQuery,
    setFilter,
    resetFilter,
    searchFilter,
    getSingleUsers,
    filteredData,
    activeUsers,
    usersWithLoan,
    usersWithSavings,
    filtersModal,
    setFilterModal,
    changeUserStatus,
  };
};
