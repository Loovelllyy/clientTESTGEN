import React, {useEffect, useState} from "react";
import {FormLabel, RadioGroup, Button} from "@mui/material";
import {Form, Formik} from "formik";
import AnswerVar from "../AnswerVar";
import {css} from "@emotion/react"
import {useNavigate} from "react-router-dom";

import {style, wrapperStyle, linkStyle, wrapper} from './styles'
import axios from "axios";
import {PATHclient, PATHreq} from "../../Requests/URLs";


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

	const [isDone, isDoneSet] = useState(false);
	const [checkedAnswer, checkedAnswerSet] = useState('');
	const [counter, counterSet] = useState(1);
	const [currentData, currentDataSet] = useState<IDataVal>();
	const [data, setData] = useState<IDataVal[]>();
	const toRes = useNavigate();

	const getData = async () => {
		axios.get(`${PATHreq.getTestById}?id=${id}`).then(({data}: { data: IData }) => {
			setData(data.data);
			currentDataSet(data.data[0]);
		})
	}

	useEffect(() => {
		getData()
	}, []);

	const setArr = (arr: any[], item: string) => {
		arr.push(item[0]);
	}

	const clickNext = (values: { answers: string[] }) => {
		if (!checkedAnswer) {
			alert('Выберите вариант ответа!');
			return false;
		} else {
			setArr(values.answers, checkedAnswer);
			currentDataSet(data[counter]);
			counterSet(prevState => prevState + 1);
			if (counter === data.length - 1) {
				isDoneSet(true)
			}
			checkedAnswerSet('');
		}
	}

	return (
		<div css={wrapper}>
			<div css={style}>
				<h1 css={css`text-align: center`}>Дайте ответ на следующий вопрос:</h1>
				<Formik
					initialValues={{
						answers: [],
					}}
					onSubmit={(values) => {
						axios.post(PATHreq.postAnswer, {values, id});
						toRes(PATHclient.ResultPage + '/' + id);
					}}
				>
					{({values}) => (
						<Form>
							<FormLabel id="demo-row-radio-buttons-group-label"
									   css={ css`display: block;
                                         margin-bottom: 30px;
                                         color: #ffffff` }>{currentData?.question}
							</FormLabel>

							<RadioGroup css={wrapperStyle} row aria-labelledby="demo-row-radio-buttons-group-label"
										name="row-radio-buttons-group" onChange={(e) => {
								checkedAnswerSet(e.target.value);
							}}>

								{
									currentData?.answer.map((el => {
										return <AnswerVar key={el} valAnswer={el} answerVar={el}/>
									}))
								}
								{isDone ?
									<Button variant="outlined" type="submit" onClick={() => clickNext(values)}>Узнать результат</Button>
									:
									<div css={linkStyle}>
										<Button variant="outlined" onClick={() => clickNext(values)}>К следующему вопросу</Button>
									</div>
								}
							</RadioGroup>
						</Form>
					)}
				</Formik>
			</div>
		</div>)
}

export default Question;