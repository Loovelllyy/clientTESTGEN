import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitalState {
	id: string;
}

const initialState: IInitalState = {
	id: '',
}

const idSlice = createSlice({
	name: 'testSlice',
	initialState,
	reducers: {
		changeCurrentId(curState, action: PayloadAction<string>){
			curState.id = action.payload;
		},
	}
})

export const { changeCurrentId } = idSlice.actions;

export const idReducer = idSlice.reducer;