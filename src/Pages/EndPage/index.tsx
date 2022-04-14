import React from 'react';
import Graph from "../../Components/Graph";
import withLoader from "../../HOC/withLoader";
import Diagramm from "../../Components/Diagramm";

function AnswerPage() {
	return(
		<>
			<Graph />
			<Diagramm/>
		</>
	)
}

const WrappedComponent = withLoader(AnswerPage, '')

export default WrappedComponent;