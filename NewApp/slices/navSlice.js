import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination :null,
    travelTimeInformation: null
}
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin:(state,action) => {
            state.origin = action.payload;
        },
        SetDestination:(state,action) => {
            state.destination = action.payload;
        },
        SetTravelTimeInformation:(state,action) => {
            state.travelTimeInformation = action.payload;
        },
    },
})

export const { setOrigin, setDestination,
    SetTravelTimeInformation} = navSlice.actions;

    export const selectOrigin = (state) => state.nav.origin;
    export const selectDestination = (state) => state.nav.destination;
    export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
        

        export default navSlice.reducer;
    