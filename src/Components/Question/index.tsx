import React, {useState} from "react";
import {FormLabel, RadioGroup, Button } from "@mui/material";
import {Form, Formik} from "formik";
import Answer from "../Answer";
import {css} from "@emotion/react"
import withLoader from "../../HOC/withLoader";
import {Link} from "react-router-dom";


// interface TProps {
// 	quest: string;
// 	answersVar: string[]
// }

const Question = (data: any) => {

	const [isDone, isDoneSet] = useState(true);

	const [checkedAnswer, checkedAnswerSet] = useState('');

	const setArr = (arr: string[], item: string) => {
		arr.push(item);
		let newArr = arr.filter((i) => {return i})
		console.log(newArr);
	}

	const arrClean = (arr: string[]) => {
		console.log('answers is submit', arr);
		arr.length = 0;
	}
	console.log(checkedAnswer)

	const question = 'This is a question'

	const wrapperStyle = css`
		display: flex;
	  	flex-direction: column;
	  	justify-content: space-between;
	  	height: 500px;
	`

	const button = css`
		height: max-content;
	  	width: max-content;
	  	padding: 10px 20px;
	`

	console.log(data)

	return (
		<div css={css`padding: 50px; display: flex; flex-direction: column; justify-content: space-around`}>
			<h1 css={css`text-align: center`}>Дайте ответ на следующий вопрос:</h1>
			<Formik
				initialValues={{
					answers: [],
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					// alert(JSON.stringify(values, null, 2));
					console.log(values);
				}}
			>
				{({ values }) => (
					<Form>
						<FormLabel id="demo-row-radio-buttons-group-label">{question}</FormLabel>
						<RadioGroup css={wrapperStyle} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={(e) => {checkedAnswerSet(e.target.value)}}>
								<Answer valAnswer='a' answerVar='adjnkajs' />
								<Answer valAnswer='b' answerVar='fsdhf' />
								<Answer valAnswer='c' answerVar='fkjsdfks' />
							{isDone?
								<Link to='/answer' css={ css` text-decoration: none `}>
									<Button variant="outlined" type="submit" css={button} onClick={() => {arrClean(values.answers)}}>Узнать результат</Button>
								</Link>
								:<Button variant="outlined" type="button" css={button} onClick={() => setArr(values.answers, checkedAnswer)}>К следующему вопросу</Button>}
						</RadioGroup>
					</Form>
				)}
			</Formik>
		</div>)
}

const WrappedComponent = withLoader(Question, 'ffk');

export default WrappedComponent;