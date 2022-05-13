import React, {useEffect, useState} from 'react';
import Diagram from "../Diagram";
import ResultBlock from "../ResultBlock";
import {css} from "@emotion/react";

import { IData } from '../../Pages/ResultPage'
import axios from "axios";
import {PATHreq} from "../../URLs";

export interface IAllData extends IData {
	percentage: number,
}

function ResultList({id}: {id: string}) {

	const [allData, allDataSet] = useState<IAllData>()
	const [data, setData] = useState<{correct: number, incorrect: number}>()


	const getCorrect = async () => {
		axios.get(`${PATHreq.getCorrect}?id=${id}`).then(({data}: { data: { correct: number, incorrect: number } }) => {
			console.log(data);
			setData(data);
			const total = {percentage: Math.round(data.correct / (data.correct + data?.incorrect) * 100)}
			allDataSet(Object.assign({}, data, total))
		});
	}

	useEffect(() => {
		getCorrect()
	}, []);

	return (
		<div>
			{ data? <div css={css`
			display: flex;
		  	gap: 5rem;
			align-items: center;
		`}>
				<Diagram data={data}/>
				<div css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 2.5rem;
			`}>
					<ResultBlock data={allData ? allData : {}}/>
				</div>

			</div>
				: null

			}
		</div>

	)
}

export default ResultList;