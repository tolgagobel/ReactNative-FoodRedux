import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";


export default store = configureStore({
    reducer: {
        favoriteFoods : favoritesReducer
    }
})
