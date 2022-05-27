import {createSlice, PayloadAction} from "@reduxjs/toolkit";
/*
	создаём слайс (= reducer lvlUp?), слайсы автоматически создают action creators (нужно импортировать, соответственно)
	+ позволяют не думать об иммутабельности данных

	слайсов может быть много, отвечают за конкретную логику
 */

interface IInitalState {
	counter: number;
}

const initialState: IInitalState = {
	counter: 0,
}

const testCounterSlice = createSlice({
	name: 'testSlice',
	initialState,
	reducers: {
		add(curState, action: PayloadAction<number>){
			curState.counter = curState.counter + action.payload;
		},
		minus(curState, action: PayloadAction<number>){
			curState.counter -= action.payload;
		},
	}
})

export const {add, minus} = testCounterSlice.actions;

export const counterReducer = testCounterSlice.reducer;