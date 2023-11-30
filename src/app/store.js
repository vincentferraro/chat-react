import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from './redux/username/usernameSlice'
export default configureStore({
    reducer:{
        username: usernameReducer
    }
})
