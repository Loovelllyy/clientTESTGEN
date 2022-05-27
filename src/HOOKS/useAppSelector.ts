import {TypedUseSelectorHook, useSelector} from "react-redux";
import {TRootState} from "../Redux/store";

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;