import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitalState {
	id: string;
}

const initialState: IInitalState = {
	id: '',
}

const mySlice = createSlice({
	name: 'testSlice',
	initialState,
	reducers: {
		changeCurrentId(curState, action: PayloadAction<string>){
			curState.id = action.payload;
		},
	}
})

export const { changeCurrentId } = mySlice.actions;

export const idReducer = mySlice.reducer;