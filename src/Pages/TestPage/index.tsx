import React from 'react';
import withData from "../../HOC/withData";
import {IGetTest} from "../../Requests/requests";

import {add, minus} from '../../Redux/sliceCounter'
import {useAppDispatch, useAppSelector} from "../../HOOKS/redux";

function TestPage({dataFromServ}: { dataFromServ: IGetTest }) {
	const counter = useAppSelector(state => state.counterReducer.counter);
	const dispatch = useAppDispatch();

	console.log(counter);
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