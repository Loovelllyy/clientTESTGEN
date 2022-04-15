import React from 'react';
import withLoader from "../../HOC/withLoader";
import Diagram from "../../Components/Diagram";

function EndPage() {
	return(
		<>
			<Diagram/>
		</>
	)
}

const WrappedComponent = withLoader(EndPage, '')

export default WrappedComponent;