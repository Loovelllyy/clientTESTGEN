import React, { useState, useEffect, useRef } from 'react';
import * as d3 from "d3";

function Graph() {
	const [data] = useState([25, 50, 35]);
	const uncorrectAnsw = useRef();
	const correctAnsw = useRef();



	useEffect(() => {
		const w = 400;
		const h = 100;
		const uncorrectLine = d3.select(uncorrectAnsw.current)
			.attr('width', w)
			.attr('height', h)
			.attr('border-radius', 20)
			.style('background', '#ff0000');
			// .style('m')

		const correctLine = d3.select(correctAnsw.current)
			.attr('width', w)
			.attr('height', h)
			.attr('border-radius', 20)
			.style('background', '#55ff00');
		// .style('m')

		// const xScale = d3.scaleLinear()
		// 	.domain(0, data.length - 1)
		// 	.range([0, w]);
		// const yScale = d3.scaleLinear()
		// 	.domain(0, h)
		// 	.range([h, 0]);
		//
		// const generateScaledLine = d3.line()
		// 	.x((d: number, i: number) => xScale(i))
		// 	.y(yScale)
		// 	.curve(d3.curveCardinal);


		// svg.selectAll('.line')
		// 	.data([data])
		// 	.join('path')
		// 		.attr('d', (d: number) => generateScaledLine(5))
		// 		.attr('fill', 'none')
		// 		.attr('stroke', 'black')
	}, [data]);




	return (
		<div>
			<div><svg ref={uncorrectAnsw} /></div>
			<div><svg ref={correctAnsw} /></div>
		</div>
	)
}

export default Graph;