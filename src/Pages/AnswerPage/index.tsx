import React from 'react';
import Graph from "../../Components/Graph";
import withLoader from "../../HOC/withLoader";

function AnswerPage() {
	return(
		<Graph />
	)
}

const WrappedComponent = withLoader(AnswerPage, '')

export default WrappedComponent;