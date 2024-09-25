import { WeatherData } from "@/constants/types/weather";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface WeatherState {
    data: WeatherData | null;
    loading: boolean; 
    error: string | null;
    city: string;
};

const initialState: WeatherState = {
    data: null,
    loading: false, 
    error: null,
    city: "",
};

export const fetchweatherData = createAsyncThunk (
    "weather/fetchWeatherData", 
    async(city: string, {rejectWithValue}) => {
        try{
            const API_KEY = "e18df6f319fc2588ef69e1c6b436da8f";
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metrics`
            );
            return response.data as WeatherData;
        } catch (error) {
            return rejectWithValue("failed to fetch weather data")
        }
    }
);

const weatherSlice = createSlice ({
    name: "weather",
    initialState, 
    reducers: {
        setCity: (state, action) => (
            state.city = action.payload
        )
    },
    extraReducers: (builder) => {
        builder.addCase (fetchweatherData.pending, (state) => {
            state.loading = true; 
            state.error = null;
        })
        .addCase(fetchweatherData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;

        })
        .addCase(fetchweatherData.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload as string;
        })

    }

})


export const {setCity} = weatherSlice.actions; 
export default weatherSlice.reducer;