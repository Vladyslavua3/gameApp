import {AppRootStateType} from "@/app/store";

export const selectOneVsOne = (state:AppRootStateType) => state.app.oneVSOne

export const selectFiveVsFive = (state:AppRootStateType) => state.app.fiveVSFive