import React, {useEffect, useState} from "react";
import {css} from "@emotion/react"

import {style, wrapper} from './styles'
import axios from "axios";
import { PATHreq } from "../../Requests/URLs";
import FormFormik from "./FormFormik";


interface IProps {
	id: string
}
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

const Question = ({id}: IProps) => {

	const [currentData, currentDataSet] = useState<IDataVal>();
	const [data, setData] = useState<IDataVal[]>();

	const getData = async () => {
		axios.get(`${PATHreq.getTestById}?id=${id}`).then(({data}: { data: IData }) => {
			setData(data.data);
			currentDataSet(data.data[0]);
		})
	}

	useEffect(() => {
		getData()
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