import { IUser, IUserData } from '@/types/data-table'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isLoggedIn: boolean
  user: IUser | null
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    },
  },
})

export const { login, logout } = authSlice.actions
export const selectIsLoggedIn = (state: { auth: AuthState }) =>
  state.auth.isLoggedIn

export default authSlice.reducer
