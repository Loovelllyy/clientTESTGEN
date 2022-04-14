import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import {css} from "@emotion/react";


function Diagramm() {

	const radius = 30;

	const width = 300;
	const height = 300;
	const data = [5, 10]
	const colors = ['red', 'green'];

	const cont = useRef()

	useEffect(() => {
		const container = d3.select(cont.current)
			.append("svg")
			.attr("width", width)
			.attr("height", height);






	}, [])

	return (
		<div css={css`width: 1200px; height: 1200px;`}>
			<svg ref={cont} css={css`width: 100%; height: 100%;`} />
		</div>
	);
}

export default Diagramm;