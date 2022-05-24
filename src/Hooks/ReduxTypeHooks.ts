import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {TAppDispatch, TRootState} from "../store";

export const UseAppDispatch = () => useDispatch<TAppDispatch>()
export const UseAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
