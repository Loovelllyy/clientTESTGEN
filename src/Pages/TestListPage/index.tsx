import React, {useEffect, useState} from 'react';
import TestList from '../../Components/TestList';
import withLoader from "../../HOC/withLoader";
import { wrapperStyle } from "../../../public/style";
import {Button} from "@mui/material";
import axios from "axios";
import {PATHreq} from "../../URLs";
import PopUpBox from "../../Components/PopUpBox";
import {css} from "@emotion/react";
import ExitPopUp from "../../Components/PopUps/ExitPopUp";
import LoadPopUp from "../../Components/PopUps/LoadPopUp";

interface ITest {
	id: number,
	nameTest: string,
}

interface IProps {
	data: ITest[],
	admin: boolean,
}

const TestListPage = () => {

	const [data, setData] = useState([]);
	const [admin, setAdmin] = useState(false);
	const [isPopUp, setIsPopUp] = useState(false);
	const [popUpType, setPopUpType] = useState<'' | 'exit' | 'load'>('');

	useEffect(() => {
		axios.get(PATHreq.getTests).then(({data}: { data: IProps }) => {
			setData(data.data);
			setAdmin(data.admin);
		} )
	}, []);

	const logOf = () => {
		setIsPopUp(true);
		setPopUpType('exit')
	};

	const exitPopUp = () => {
		setIsPopUp(false);
	};

	const loadTest = () => {
		setIsPopUp(true);
		setPopUpType('load')
	}

	return (
		<div css={ wrapperStyle }>
			{admin? <Button
				css={ css`position: absolute; top: 0; right: 0; margin: 30px; border: 1px solid #3E514A` }
				color='secondary'
				onClick={loadTest}>
					Загрузить тест
			</Button> : null}
			{admin? <h2>Доступные тесты</h2> : < h1 > Выберите нужный тест</h1>}
			<TestList data={data} admin={admin} />
			{admin? <Button color="secondary" sx={{mt: '20px', border: '1px solid #3E514A'}} onClick={ logOf }> Выйти </Button> : null}
			{isPopUp? <PopUpBox exit={exitPopUp} type={popUpType} /> : null}
		</div>
	);
};

const WrappedPage = withLoader(TestListPage)

export default WrappedPage;