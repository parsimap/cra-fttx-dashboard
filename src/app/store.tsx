import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({

})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
