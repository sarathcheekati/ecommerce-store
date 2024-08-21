import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/user/userSlice"
import cartReducer from "../features/cart/cartSlice"
import themeReducer from "../features/theme/themeSlice"

export const store = configureStore({
  reducer: {
    user:userReducer,
    theme:themeReducer,
    cart:cartReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export type ReduxStore = {
    getState:()=>RootState,
    dispatch:AppDispatch
}