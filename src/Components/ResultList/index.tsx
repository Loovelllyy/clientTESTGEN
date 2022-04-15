import React, {useEffect, useState} from 'react';
import Diagram from "../Diagram";
import ResultBlock from "../ResultBlock";
import {css} from "@emotion/react";

export interface IData {
	type: 'correct' | 'incorrect' | 'total',
	num: number,
	color? : string,
	percentage?: number,
}

export interface IDataFromServer extends IData{
	type: 'correct' | 'incorrect'
}

const dataMap: Record<IData['type'], number> = {
	total: 0,
	correct: 1,
	incorrect: 2,
}

// TODO remove arrs

function ResultList({data}: { data: IDataFromServer[] }) {
	const [convertData, convertDataSet] = useState<IData[]>([])

	const getConvertData = (fromServ: IDataFromServer[]) => {

		const colors = {total: `var(--bgTotal)`, correct: `var(--bgCorrect)`, incorrect: `var(--bgIncorrect)`}

		let counter = 0;
		let corrAnsw = 0;

		let newArr: IData[] = fromServ.map(el => {
			if (el.type === 'correct'){
				counter += el.num;
				corrAnsw = el.num;
				return Object.assign(el, {color: colors.correct});
			}
			if (el.type === 'incorrect'){
				counter += el.num;
				return Object.assign(el, {color: colors.incorrect});
			}
		})

		newArr.push({
			type: 'total',
			num: counter,
			color: colors.total,
			percentage: Math.round(corrAnsw/counter * 100 ),
		});

		return newArr.sort((a, b) => {
			return dataMap[a.type] - dataMap[b.type];
		});
	}

	useEffect(() => {
		let d = getConvertData(data)
		console.log(d)
		convertDataSet(() => d)
	}, [])


	console.log(convertData)
	return (
		<div css={css`
			display: flex;
		  	gap: 5rem;
			align-items: center;
		`}>
			<Diagram data={convertData} />
			<div css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 2.5rem;
			`}>
				{
					convertData.map(el => {
						return <ResultBlock key={el.color} type={el.type} num={el.num} color={el.color} percentage={el.percentage} />
					})
				}
			</div>

		</div>
	);
}

export default ResultList;