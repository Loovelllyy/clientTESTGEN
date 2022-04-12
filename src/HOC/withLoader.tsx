import React, {useEffect, useState, JSXElementConstructor, ComponentType} from 'react';
import axios from "axios";
import Loader from "../Components/Loader";

interface IData {
	WrappedComponent: new() => React.Component<any, any>,
	url: string
}



function withLoader(WrappedComponent: ComponentType<any>, url: string) {



	const hoc = () => {

		const [isDone, isDoneSet] = useState(true);
		const [data, dataSet] = useState();

		useEffect(() => {
			console.log('this is hoc')
				console.log('this is HOC')
				setTimeout(() => {
					axios.get(url).then(data => {
			isDoneSet(true);
			dataSet(data.data);
				});
			}, 3000)
				return () => { isDoneSet(false) }
		}, [])

		console.log('hoc is worked')
		return isDone? <WrappedComponent data={data} /> : <Loader />
	}

	return hoc;
}

export default withLoader;