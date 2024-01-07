import { FilterQuery, UserFilterType } from '@/types/dataTable';
import React from 'react';
import { useUsersData } from './useData';

const initialState: FilterQuery = {
  organisation: '',
  username: '',
  email: '',
  date: '',
  phone_number: '',
  status: '',
  search_string: '',
};

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

export const useFilters = () => {
  const [
    {
      organisation,
      username,
      email,
      date,
      phone_number,
      status,
      search_string,
    },
    dispatch,
  ] = React.useReducer(UserReducer, initialState);

  const setFilter = React.useCallback(
    (payload: UserFilterType) => {
      dispatch({ type: 'SET_FILTER', payload });
    },
    [dispatch]
  );

  const resetFilter = React.useCallback(() => {
    dispatch({ type: 'RESET_STATE' });
  }, [dispatch]);

  const searchFilter = React.useCallback((search: string) => {
    dispatch({
      type: 'SEARCH_USER',
      payload: search,
    });
  }, []);

  const user = useUsersData();

  const filterUsers = (params: FilterQuery) => {
    const areAllValuesEmpty = Object.values(params).every(
      value => value === ''
    );
    if (areAllValuesEmpty) {
      return user.generatedData;
    }

    return user.generatedData.filter(item => {
      return Object.entries(params).every(
        ([key, value]) => item[key] === value
      );
    });
  };

  const _activeUsers = () =>
    user.generatedData.filter(item => item.status === 'active');

  const _usersWithLoan = () => user.generatedData.filter(item => item.withLoan);
  const _usersWithSavings = () =>
    user.generatedData.filter(item => item.withSavings);

  const query = React.useMemo(
    () => ({
      organisation,
      username,
      email,
      date,
      phone_number,
      status,
      search_string,
    }),
    [organisation, username, email, date, phone_number, status, search_string]
  );

  const filteredData = filterUsers(query);
  const activeUsers = _activeUsers().length;
  const usersWithLoan = _usersWithLoan().length;
  const usersWithSavings = _usersWithSavings().length;

  console.log({ filteredData });

  return [
    {
      organisation,
      username,
      email,
      date,
      phone_number,
      status,
      search_string,
    },
    {
      setFilter,
      resetFilter,
      searchFilter,
    },
    { filteredData, activeUsers, usersWithLoan, usersWithSavings },
  ];
};
