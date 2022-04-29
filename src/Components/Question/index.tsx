import React, {useState} from "react";
import {FormLabel, RadioGroup, Button} from "@mui/material";
import {Form, Formik} from "formik";
import AnswerVar from "../AnswerVar";
import {css} from "@emotion/react"
import withLoader from "../../HOC/withLoader";
import {Link} from "react-router-dom";


import {style, wrapperStyle, linkStyle, wrapper} from './styles'

interface IProps {
	quest: string;
	answersVar: string[]
}

export const s = css`
  display: block;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.22);
  padding: 10px;
  margin: 0;
  border-radius: var(--borderRadius);
`

const Question = (data: IProps[] ) => {

	const [isDone, isDoneSet] = useState(false);
	const [checkedAnswer, checkedAnswerSet] = useState('');

	const [counter, counterSet] = useState(1);

	const [currentData, currentDataSet] = useState<IProps>(data[0]);


	const setArr = (arr: string[], item: string) => {
		arr.push(item);
		let newArr = arr.filter((i) => {
			return i
		})
		console.log(newArr);
	}

	const arrClean = (arr: string[]) => {
		console.log('answers is submit', arr);
		arr.length = 0;
	}

	// TODO add checking on submit button, add func submit

	const clickNext = (values: { answers: string[] }) => {
		if (!checkedAnswer) {
			alert('Выберите вариант ответа!');
			return;
		}

		setArr(values.answers, checkedAnswer);
		currentDataSet(data[counter]);
		counterSet(prevState => prevState + 1);
		if (counter === data.length - 1) {
			isDoneSet(true)
		}

		checkedAnswerSet('');
	}

	return (
		<div css={wrapper}>
			<div css={style}>
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
					{({values}) => (
						<Form>
							<RadioGroup css={wrapperStyle} row aria-labelledby="demo-row-radio-buttons-group-label"
										name="row-radio-buttons-group" onChange={(e) => {
								checkedAnswerSet(e.target.value)
							}}>
								<FormLabel id="demo-row-radio-buttons-group-label"
										   css={s}>{currentData.quest}</FormLabel>
								{
									currentData?.answersVar.map((el => {
										return <AnswerVar key={el} valAnswer={el} answerVar={el}/>
									}))
								}
								{isDone ?
									<Link to='/result' css={linkStyle}>
										<Button variant="outlined" type="submit" onClick={() => {
											arrClean(values.answers)
										}}>Узнать результат</Button>
									</Link>
									:
									<div css={linkStyle}>
										<Button variant="outlined" type="button" onClick={() => clickNext(values)}>К
											следующему вопросу</Button>
									</div>
								}
							</RadioGroup>
						</Form>
					)}
				</Formik>
			</div>
		</div>)
}

const WrappedComponent = withLoader(Question);

export default WrappedComponent;