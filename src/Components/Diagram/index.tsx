import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import {css} from "@emotion/react";

interface IProps {
	type: string;
	num: number;
	percentage: number
	color: string
}

function Diagram() {
	const width = 300;
	const height = 300;

	const data: IProps[] = [{type: 'correct' , num: 10, percentage: 80, color: '#4ED45B'}, {type: 'incorrect', num: 5, percentage: 20, color: '#FD5967'}]

	let radius =  Math.min(width, height) / 2.5;
	const divContainer = useRef()

	useEffect(() => {

		const container = d3.select(divContainer.current)
			.append("svg")
			.attr("width", width)
			.attr("height", height);

		let g = container.append("g")
			.attr("transform", `translate(${radius}, ${radius})`);

		let pie = d3.pie().value(function(d: IProps) {
			return d.percentage;
		});

		let path = d3.arc()
			.outerRadius(radius)
			.innerRadius(70);

		g.selectAll(".donutArcSlices")
			.data(pie(data))
			.enter().append("path")
			.style('width', '100%')
			.attr("class", "donutArcSlices")
			.attr("d", path)
			.attr("fill", function(d: { data: IProps; }) { return d.data.color; })
			.each(function(d: IProps, i: string) {
				let firstArcSection = /(^.+?)L/;
				let newArc = firstArcSection.exec( d3.select(this).attr("d") )[1];
				newArc = newArc.replace(/,/g , " ");
				g.append("path")
					.attr("class", "hiddenDonutArcs")
					.attr("id", "donutArc"+i)
					.attr("d", newArc)
					.style("fill", "none");
			});

		g.selectAll(".donutText")
			.data(data)
			.enter().append("text")
			.attr("class", "donutText")
			.attr("dy", -13)
			.append("textPath")
			.attr("startOffset","50%")
			.style("text-anchor","middle")
			.attr("xlink:href",(d: IProps, i: number) => "#donutArc" + i)
			.text((d: IProps) => `${d.type}: ${d.num}`);

	}, [data]);

	return (
		<div css={css`width: 300px; height: 300px; margin: 50px; & > svg { overflow: visible } `} ref={divContainer}>
		</div>
	);
}

export default Diagram;