import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./Slices/sliceCounter";
import {idReducer} from "./Slices/sliceId";
import {themeReducer} from "./Slices/sliceTheme";

const rootReducer = combineReducers({
	counterReducer, idReducer, themeReducer
});
/*
 configureStore - создаём хранилище, которе будет доступно далее всему приложению
 reducer - набор инструкций, которые изменяют хранилище

 хук useSelector позволяет вытащить нужно значение из стора
 хук useDispatch позволяет отправить action
*/

export const createStore = () => configureStore({
		reducer: rootReducer
	})

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof createStore>;
export type TAppDispatch = TAppStore['dispatch'];