import React, {useEffect, useState, JSXElementConstructor, ComponentType} from 'react';
import axios from "axios";
import Loader from "../Components/Loader";

interface IData {
	WrappedComponent: new() => React.Component<any, any>,
	url: string
}

function withLoader(WrappedComponent: ComponentType<any>) {

	// const reqData = [
	// 	{quest: 'quest1', answersVar: ['a', 'b', 'c']},
	// 	{quest: 'quest2', answersVar: ['aa', 'bb', 'cc']},
	// 	{quest: 'quest3', answersVar: ['aaa', 'bbb', 'ccc']},
	// ] ;
//props: Record<string, unknown>
	const hoc = () => {

		const [isDone, isDoneSet] = useState(false);

		useEffect(() => {
				setTimeout(() => {
					isDoneSet(true)
					// });
				}, 1500)
			return () => { isDoneSet(false) }
		}, [])
		return isDone ? <WrappedComponent /> : <Loader />
	}

	return hoc;
}

export default withLoader;