import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TTheme = 'light' | 'dark' | string;

interface IInitialState {
	themeMode: TTheme;
}

const initialState: IInitialState = {
	themeMode: 'light',
}

const themeSlice = createSlice({
	name: 'testSlice',
	initialState,
	reducers: {
		changeTheme(curState, action: PayloadAction<TTheme>){
			curState.themeMode = action.payload;
		},
	}
})

export const { changeTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;