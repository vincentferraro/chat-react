import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from '../app/features/username/usernameSlice'
export default configureStore({
    reducer:{
        username: usernameReducer
    }
})
