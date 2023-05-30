import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    oneVSOne: false,
    fiveVSFive:false,
    confirmGame:false,
    isSearching:false
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
        },
        setConfirmGame:(state, action:PayloadAction<{confirmGame:boolean}>) => {
            state.confirmGame = action.payload.confirmGame
        },
        setIsSearching:(state, action:PayloadAction<{isSearching:boolean}>) => {
            state.isSearching = action.payload.isSearching
        }
    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions