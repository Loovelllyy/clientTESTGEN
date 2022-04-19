import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import {css} from "@emotion/react";

import {IData} from "../../Pages/ResultPage";

interface IMyData {
	num: number,
	color: string,
}

function Diagram({data}: { data: IData }) {
	const width = 400;
	const height = 400;

	let radius =  Math.min(width, height) / 2.5;

	const divContainer = useRef()

	useEffect(() => {
		const myData: IMyData[] = [{num: data.correct, color: 'var(--bgCorrect)'}, {num: data.incorrect, color: 'var(--bgIncorrect)'}];

		d3.selectAll('svg').remove();

		const container = d3.select(divContainer.current)
			.append("svg")
			.attr("width", width)
			.attr("height", height);

		let g = container.append("g")
			.attr("transform", `translate(${radius}, ${radius})`);

		let pie = d3.pie().value((d: IMyData) => d.num );

		let path = d3.arc()
			.outerRadius(radius)
			.innerRadius(70);

		g.selectAll(".donutArcSlices")
			.data(pie(myData))
			.enter().append("path")
			.style('width', '100%')
			.attr("class", "donutArcSlices")
			.attr("d", path)
			.attr("fill", (d: { data: IMyData }) => d.data.color )

		// text on diagram
			// .each(function(d: IData, i: number) {
			// 	let firstArcSection = /(^.+?)L/;
			// 	let newArc = firstArcSection.exec( d3.select(this).attr("d") )[0];
			// 	newArc = newArc.replace(/,/g , " ");
			// 	g.append("path")
			// 		.attr("class", "hiddenDonutArcs")
			// 		.attr("id", "donutArc"+i)
			// 		.attr("d", newArc)
			// 		.style("fill", "none");
			// });
		// g.selectAll(".donutText")
		// 	.data(data)
			// .enter().append("text")
			// .attr("class", "donutText")
			// .attr("dy", -13)
			// .append("textPath")
			// .attr("startOffset","50%")
			// .style("text-anchor","middle")
			// .attr("xlink:href",(d: IData, i: number) => "#donutArc" + i)
			// .text((d: IData) => `${d.type}: ${d.num}`);

	}, [data]);

	return (
		<div css={css`width: 300px; height: 300px; margin: 50px; & > svg { overflow: visible } `} ref={divContainer}>
		</div>
	);
}

export default Diagram;