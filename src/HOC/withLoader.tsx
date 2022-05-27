import React, {useEffect, useState} from 'react';
import Loader from "../Components/Loader";

function withLoader(WrappedComponent: React.FC<{}>) {

	const hoc = () => {

		const [isDone, isDoneSet] = useState(false);

		useEffect(() => {
				setTimeout(() => {
					isDoneSet(true)
				}, 1500)
			return () => { isDoneSet(false) }
		}, [])
		return isDone ? <WrappedComponent /> : <Loader />
	}

	return hoc;
}

export default withLoader;