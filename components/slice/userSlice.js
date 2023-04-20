import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
        first_name: '',
        last_name: '',
        email: '',
        id: ''
    },
    token: ''
  },
  reducers: {
    mutateUser: (state, actions) => {
        state.user = actions.payload;
    },
    mutateToken: (state, actions) => {
        state.token = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { mutateUser, mutateToken } = authSlice.actions

export default authSlice.reducer