import {AnyAction, combineReducers} from "redux";
import {appReducer} from "@/app/appReducer";
import {configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {mapsReducer} from "@/components/mainSection/gameReducer/gameReducer";

const rootReducer = combineReducers({
    app:appReducer,
    maps:mapsReducer
})

export const store = configureStore({
    reducer:rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>