import { configureStore } from '@reduxjs/toolkit'
//import authReducer from '../screens/Authentication/authSlice'
import authReducer from '../components/slice/userSlice'

export default configureStore({
  reducer: {
    auth: authReducer
  },
 
})