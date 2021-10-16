import {createSlice} from '@reduxjs/toolkit';

const initState = {
    origin:null,
    destination:null,
    travelTimeInformation:null
}
const navSlice = createSlice({
    name:'navSlice',
    initialState:initState,
    reducer:{
        setOrigin:(state,action)=>
        {
            state.origin  =  action.payload
        },
        setDestionation:(state,action)=>
        {
            state.destination = action.payload
        },
        setTraveltimeInfo:(state,action)=>
        {
            state.travelTimeInformation = action.payload
        }
    }
})
export const {setOrigin,setDestionation,setTraveltimeInfo} = navSlice.actions;
export default navSlice.reducer;