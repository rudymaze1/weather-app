import { configureStore } from "@reduxjs/toolkit";
import weatherreducer from "./weatherSlice"




export const store = configureStore ({
    reducer: {
        weather: weatherreducer,

    }
});

export type Rootstate = ReturnType <typeof store.getState>;
export type Appdispatch = typeof store.dispatch;