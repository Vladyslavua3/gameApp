import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type initState = {
    oneVSOne: boolean,
    fiveVSFive:boolean
}

const initialState:initState = {
    oneVSOne: false,
    fiveVSFive:false
}

const slice = createSlice({
    name:'app',
    initialState,
    reducers:{
        setOneVsOne:(state:initState, action:PayloadAction<{oneVSOne:boolean}>) => {
            state.oneVSOne = action.payload.oneVSOne
        },
        setFiveVsFive:(state:initState, action:PayloadAction<{fiveVSFive:boolean}>) => {
            state.fiveVSFive = action.payload.fiveVSFive
        }
    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions