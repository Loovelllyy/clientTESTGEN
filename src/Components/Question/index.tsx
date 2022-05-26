import React, {useEffect, useState} from "react";
import {css} from "@emotion/react"

import {style, wrapper} from './styles'
import axios from "axios";
import { PATHreq } from "../../Requests/URLs";
import FormFormik from "./FormFormik";
import withData from "../../HOC/withData";
import {useAppSelector} from "../../HOOKS/redux";
import {getQuestions, IGetTest} from "../../Requests/requests";

interface IDataVal {
	question: string;
	answer: string[];
	correct?: string;
}
interface IData {
	data: IDataVal[]
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

	// const getData = async () => {
	// 	axios.get(`${PATHreq.getTestById}?id=${id}`).then(({data}: { data: IData }) => {
	// 		setData(data.data);
	// 		currentDataSet(data.data[0]);
	// 	})
	// }

	useEffect(() => {
		// axios.get(`${PATHreq.getTestById}?id=${id}`).then(({data}: { data: IData }) => {
		// 	setData(data.data);
		// 	currentDataSet(data.data[0]);
		// })
		getQuestions(id).then(data => {
			console.log(data)
			// setData(data.data);
			// currentDataSet(data.data[0]);
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