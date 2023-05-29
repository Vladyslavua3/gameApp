import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    oneVSOne: false,
    fiveVSFive:false
}

const slice = createSlice({
    name:'app',
    initialState,
    reducers:{
        setOneVsOne:(state, action:PayloadAction<{oneVSOne:boolean}>) => {
            state.oneVSOne = action.payload.oneVSOne
        },
        setFiveVsFive:(state, action:PayloadAction<{fiveVSFive:boolean}>) => {
            state.fiveVSFive = action.payload.fiveVSFive
        }
    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions