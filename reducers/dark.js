import { createSlice } from '@reduxjs/toolkit';

//light mode by default: darkMode: false
const initialState = {
    value: false,
};

export const darkSlice = createSlice({
    name: 'dark',
    initialState,
    reducers: {
        isDarkOrLight: (state, action) => {
            console.log(state.value);
            state.value = !state.value;
        }
    }
});

export const { isDarkOrLight } = darkSlice.actions;
export default darkSlice.reducer;