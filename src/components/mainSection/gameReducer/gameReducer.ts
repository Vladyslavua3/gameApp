import mapLego from '../../../data/img/mapLego.png'
import mapLou from '../../../data/img/mapLou.png'
import mapRedLine from '../../../data/img/mapRedline.png'
import mapShred from '../../../data/img/mapShred.png'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

enum MapsEnum {
    RED_LINE = "aim_RedLine",
    AIM_BY_LOU = "aim_byLou",
    AWP_LEGO = "awp_Lego",
    SHRED = "shred"
}

const initialState = {
    redLine:{
        name:MapsEnum.RED_LINE,
        isSelected:true,
        img:mapRedLine
    },
    byLou:{
        name: MapsEnum.AIM_BY_LOU,
        isSelected: true,
        img: mapLou
    },
    awpLego:{
        name: MapsEnum.AWP_LEGO,
        isSelected: true,
        img: mapLego
    },
    shred:{
        name: MapsEnum.SHRED,
        isSelected: true,
        img: mapShred
    }
}


type initialStateType = typeof initialState


const slice = createSlice({
    name:'gameMaps',
    initialState,
    reducers:{
        setRedMap:(state, action:PayloadAction<{isSelected:boolean}>)=>{
            state.redLine.isSelected = action.payload.isSelected
        },
        setLouMap:(state, action:PayloadAction<{isSelected:boolean}>)=>{
            state.byLou.isSelected = action.payload.isSelected
        },
        setLegoMap:(state, action:PayloadAction<{isSelected:boolean}>)=>{
            state.awpLego.isSelected = action.payload.isSelected
        },
        setShredMap:(state, action:PayloadAction<{isSelected:boolean}>)=>{
            state.shred.isSelected = action.payload.isSelected
        }
    }
})

export const mapsReducer = slice.reducer
export const mapsActions = slice.actions