import React, { useState, useEffect, useRef } from 'react';
import * as d3 from "d3";

function Graph() {
	const [data] = useState([25, 50, 35]);
	const svgRef = useRef();


	useEffect(() => {
		const w = 400;
		const h = 100;
		const svg = d3.select(svgRef.current)
			.attr('width', w)
			.attr('height', h)
			.style('background', '#ff0000');
			// .style('m')

		const xScale = d3.scaleLinear()
			.domain(0, data.length - 1)
			.range([0, w]);
		const yScale = d3.scaleLinear()
			.domain(0, h)
			.range([h, 0]);

		const generateScaledLine = d3.line()
			.x((d: number, i: number) => xScale(i))
			.y(yScale)
			.curve(d3.curveCardinal);


		svg.selectAll('.line')
			.data([data])
			.join('path')
				.attr('d', (d: number) => generateScaledLine(5))
				.attr('fill', 'none')
				.attr('stroke', 'black')
	}, [data]);




	return (
		<div>
			<svg ref={svgRef} />
		</div>
	)
}

export default Graph;