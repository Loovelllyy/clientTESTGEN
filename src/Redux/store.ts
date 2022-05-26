import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./sliceCounter";
import {idReducer} from "./sliceId";

const rootReducer = combineReducers({
	counterReducer, idReducer
});
/*
 configureStore - создаём хранилище, которе будет доступно далее всему приложению
 reducer - набор инструкций, которые изменяют хранилище

 хук useSelector позволяет вытащить нужно значение из стора
 хук useDispatch позволяет отправить action
*/
// export const setupStore = () => {
export const createStore = () => configureStore({
		reducer: rootReducer
	})
// };

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof createStore>;
export type TAppDispatch = TAppStore['dispatch'];