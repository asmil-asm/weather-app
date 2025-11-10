import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const weatherAsync=createAsyncThunk('weatherAPI',async()=>{
let response=await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=36.72&lon=28.61&appid=c2e3c0d525d40d15dc17a2493f36f6c6',
    {

    }
)
  let degree=Math.round(response.data.main.temp-272.15);
    let temp_max=Math.round(response.data.main.temp_max-272.15);
    let temp_min=Math.round(response.data.main.temp_min-272.15);
    let description=response.data.weather[0].description
    let icon=response.data.weather[0].icon;
    return {degree,temp_max,temp_min,description,icon}
})
const weatherRedux=createSlice({
    name:'weather',
    initialState:{
        result:'empty',
        weather:{},
        isLoad:false
    },
    reducers:{
 changeWeather:(state)=>{
        state.result='change'
    }
    },
    extraReducers(builder){
        builder.addCase(weatherAsync.pending,(state)=>{
            state.isLoad=true;
        }).addCase(weatherAsync.fulfilled,(state,action)=>{
            state.isLoad=false
            state.weather=action.payload;
        }).addCase(weatherAsync.rejected,(state)=>{
            state.isLoad=false
        })

    }
})
export const{changeWeather}=weatherRedux.actions
export default weatherRedux.reducer