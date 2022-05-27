import React, {useEffect, useState} from "react";
import {css} from "@emotion/react"

import {style, wrapper} from './styles'
import FormFormik from "./FormFormik";
import {useAppSelector} from "../../HOOKS/useAppSelector";
import {getQuestions} from "../../Requests/requests";

interface IDataVal {
	question: string;
	answer: string[];
	correct?: string;
}

export const s = css`
  display: block;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.22);
  padding: 10px;
  margin: 0;
  border-radius: var(--borderRadius);
`

const Question = () => {

	const [currentData, currentDataSet] = useState<IDataVal>();
	const [data, setData] = useState<IDataVal[]>();

	const id = useAppSelector(state => state.idReducer.id)

	useEffect(() => {
		getQuestions(id).then(data => {
			setData(data);
			currentDataSet(data[0]);
		})
	}, []);

	return (
		<div css={wrapper}>
			<div css={style}>
				<h1 css={css`text-align: center`}>Дайте ответ на следующий вопрос:</h1>
				<FormFormik currentData={currentData} data={data} currentDataSet={currentDataSet} id={id} />
			</div>
		</div>)
}

export default Question;