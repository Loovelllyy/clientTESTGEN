import React, {useEffect} from 'react';
import withLoader from "../../HOC/withLoader";
import ResultList from "../../Components/ResultList";
import {css} from '@emotion/react';
import {useNavigate, useParams} from 'react-router-dom';
import {Button} from "@mui/material";
import {PATHclient, PATHreq} from "../../Requests/URLs";
import axios from "axios";

export interface IData {
	correct: number,
	incorrect: number,
}
const ids: string[] = []

function ResultPage() {

	const nav = useNavigate();

	let {id} = useParams<string>();


	useEffect(() => {
		axios.get(PATHreq.getTests).then(d => {
			d.data.data.map((el: {id: string}) => {
				ids.push(el.id)
			})
		}).then(() => {
			if(ids.findIndex((i) => i == id) == -1) {
				nav('/not-found');
			}
		})
	}, []);


	return (
		<div css={css`
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          background: var(--bgList); `}>
			<h1 css={css`text-align: center;
              margin: 0`}>Тест завершён!</h1>
			<ResultList id={id} />
			<div css={css`display: flex; width: 50%; align-items: center; justify-content: space-evenly`}>
				<Button variant='outlined' color='secondary' onClick={() => nav(PATHclient.TestListPage)}>Назад к тестам</Button>
				<Button variant='outlined' color='secondary' onClick={() => nav(PATHclient.HomePage)}> На главную </Button>
			</div>
		</div>
	)
}

const WrappedComponent = withLoader(ResultPage)

export default WrappedComponent;