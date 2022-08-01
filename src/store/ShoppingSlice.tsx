import { createSlice } from '@reduxjs/toolkit'

interface IShopState {
  user_email: string,
  token: string,
  isAuthenticated: boolean,
}

const initialState: IShopState = {
  user_email: '',
  token: '',
  isAuthenticated: localStorage.getItem('user') ? true : false,
}

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.token = action.payload.token
      state.user_email = action.payload.email
      state.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(state.token))
    },
    removeUser(state) {
      state.token = ''
      state.user_email = ''
      localStorage.removeItem('user')
      state.isAuthenticated = false
    },
  },
})

export const { addUser, removeUser } = shoppingSlice.actions

export default shoppingSlice.reducer