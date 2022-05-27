import {useAppDispatch} from "./useAppDispatch";
import {changeTheme} from "../Redux/Slices/sliceTheme";
import {useAppSelector} from "./useAppSelector";


const useTheme = () => {
	const dispatch = useAppDispatch();

	const theme = useAppSelector(state => state.themeReducer.themeMode);

	const toggleTheme = () => {
		if (theme !== "dark") {
			dispatch(changeTheme('dark'))
		} else {
			dispatch(changeTheme('light'))
		}
	};

	return {
		theme,
		toggleTheme
	};
};

export default useTheme