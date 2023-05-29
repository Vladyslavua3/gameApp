import {AppRootStateType} from "@/app/store";

export const selectRedLineMap = (state:AppRootStateType) => state.maps.redLine

export const selectByLouMap = (state:AppRootStateType) => state.maps.byLou

export const selectAwpLegoMap = (state:AppRootStateType) => state.maps.awpLego

export const selectShred = (state:AppRootStateType) => state.maps.shred

export const selectGame = (state:AppRootStateType) => state.maps
