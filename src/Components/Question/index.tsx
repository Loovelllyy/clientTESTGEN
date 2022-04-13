import React, {useState} from "react";
import {FormLabel, RadioGroup, Button } from "@mui/material";
import {Form, Formik} from "formik";
import Answer from "../Answer";
import {css} from "@emotion/react"
import withLoader from "../../HOC/withLoader";
import {Link} from "react-router-dom";


import {style, wrapperStyle, linkStyle, wrapper} from './styles'
import {btnStyle} from "../../../public/style";

// interface TProps {
// 	quest: string;
// 	answersVar: string[]
// }

const Question = (data: unknown) => {

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

	const question = 'This is a question'

	return (
		<div css={ wrapper }>
			<div css={ style }>
				<h1 css={css`text-align: center`}>Дайте ответ на следующий вопрос:</h1>
				<Formik
					initialValues={{
						answers: [],
					}}
					onSubmit={async (values) => {
						await new Promise((r) => setTimeout(r, 500));
						console.log(values);
					}}
				>
					{({ values }) => (
						<Form>
							<RadioGroup css={wrapperStyle} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={(e) => {checkedAnswerSet(e.target.value)}}>
								<FormLabel id="demo-row-radio-buttons-group-label" css={css` display: block;`}>{question}</FormLabel>
								<Answer valAnswer='a' answerVar='adjnkajs' />
								<Answer valAnswer='b' answerVar='fsdhf' />
								<Answer valAnswer='c' answerVar='fkjsdfks' />
								{isDone ?
									<Link to='/answer' css={ linkStyle }>
										<Button variant="outlined" type="submit" sx={ btnStyle } onClick={() => {arrClean(values.answers)}}>Узнать результат</Button>
									</Link>
									:
									<div css={ linkStyle }>
										<Button variant="outlined" type="button" sx={ btnStyle }  onClick={() => setArr(values.answers, checkedAnswer)}>К следующему вопросу</Button>
									</div>
								}
							</RadioGroup>
						</Form>
					)}
				</Formik>
			</div>
		</div>)
}

const WrappedComponent = withLoader(Question, 'ffk');

export default WrappedComponent;