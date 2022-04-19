import React, {useEffect, useState} from 'react';
import Diagram from "../Diagram";
import ResultBlock from "../ResultBlock";
import {css} from "@emotion/react";

import { IData } from '../../Pages/ResultPage'

export interface IAllData extends IData {
	percentage: number,
}

function ResultList({ data }: { data: IData }) {

	const [allData, allDataSet] = useState<IAllData>()


	useEffect(() => {
		const total = { percentage: Math.round(data.correct / (data.correct + data.incorrect) * 100)}
		allDataSet(Object.assign({}, data, total));
	}, []);


	return (
		<div css={css`
			display: flex;
		  	gap: 5rem;
			align-items: center;
		`}>
			<Diagram data={ data } />
			<div css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 2.5rem;
			`}>
				<ResultBlock data={ allData? allData : {} } />
			</div>

		</div>
	);
}

export default ResultList;