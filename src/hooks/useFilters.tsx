import { FilterQuery, UserFilterType } from '@/types/datatable';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

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

  //   const { setAlert } = useToast();
  const filterUsers = async (params: FilterQuery) => {
    const queryParams = {};
    //   try {
    //     const res = await client.get('c/FieldStaffs/getDownlines', {
    //       params: queryParams,
    //     });
    //     return pickResult(res);
    //   } catch (error) {
    //     return pickErrorMessage(error as any);
    //   }
  };

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
    // { data, isFetching },
  ];
};
