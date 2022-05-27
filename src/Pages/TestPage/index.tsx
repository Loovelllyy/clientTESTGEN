import React from 'react';
import withData from "../../HOC/withData";

import {add, minus} from '../../Redux/Slices/sliceCounter'
import {useAppDispatch} from "../../HOOKS/useAppDispatch";
import {useAppSelector} from "../../HOOKS/useAppSelector";

function TestPage() {
	const counter = useAppSelector(state => state.counterReducer.counter);
	const dispatch = useAppDispatch();

	const plus = () => {
		dispatch(add(5))
	}
	const min = () => {
		dispatch(minus(6))
	}


	return (
		<div>
			<p>Just test page</p>
			<p>This is Counter {counter}</p>
			<button onClick={plus}>+</button> <button onClick={min}>-</button>
		</div>
	);
}

const WrapperdComponent = withData(TestPage);


export default WrapperdComponent;