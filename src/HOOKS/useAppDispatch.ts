import {useDispatch} from "react-redux";
import {TAppDispatch} from "../Redux/store";

export const useAppDispatch = () => useDispatch<TAppDispatch>();