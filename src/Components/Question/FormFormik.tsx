import React, {useState} from 'react';
import axios from "axios";
import {PATHclient, PATHreq} from "../../Requests/URLs";
import {Form, Formik} from "formik";
import {Button, FormLabel, RadioGroup} from "@mui/material";
import {css} from "@emotion/react";
import {linkStyle, wrapperStyle} from "./styles";
import AnswerVar from "../AnswerVar";
import {useNavigate} from "react-router-dom";

interface IDataVal {
	question: string;
	answer: string[];
	correct?: string;
}

interface IProps {
	currentData: IDataVal;
	data: IDataVal[];
	currentDataSet: React.Dispatch<React.SetStateAction<IDataVal>>;
	id: string;
}

function FormFormik({currentData, data, currentDataSet, id}: IProps) {

	const [isDone, isDoneSet] = useState(false);
	const [checkedAnswer, checkedAnswerSet] = useState('');
	const [counter, counterSet] = useState(1);


	const toRes = useNavigate();

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

					</RadioGroup>
					{isDone ?
						<Button variant="outlined" type="submit" onClick={() => clickNext(values)}>Узнать результат</Button>
						:
						<div css={linkStyle}>
							<Button css={linkStyle} variant="outlined" onClick={() => clickNext(values)}>К следующему вопросу</Button>
						</div>
					}
				</Form>
			)}
		</Formik>
	);
}

export default FormFormik;