import React, {useEffect, useState} from 'react';
import axios from "axios";
import {PATHreq} from "../../URLs";

import {Button} from "@mui/material";
import {wrapperStyle} from "../../../public/style";
import {css} from "@emotion/react";

import withLoader from "../../HOC/withLoader";
import TestList from '../../Components/TestList';
import PopUpBox from "../../Components/PopUpBox";


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

	const [isLoad, setIsLoad] = useState(false);

	const getTest = async () => {
		axios.get(PATHreq.getTests).then(({data}: { data: IProps }) => {
			setData(data.data);
			setAdmin(data.admin);
		})
	}

	useEffect(() => {
		getTest();
	}, []);

	const logOf = () => {
		setIsPopUp(true);
		setPopUpType('exit')
	};

	const exitPopUp = () => {
		setIsPopUp(false);
	};

	const updateTest = () => {
		setIsLoad(true);
		getTest().then(() => setIsLoad(false));
	}

	const loadTest = () => {
		setIsPopUp(true);
		setPopUpType('load')
	}

	return (
		<div css={wrapperStyle}>
			{admin ? <Button
				css={css`position: absolute;
                  top: 0;
                  right: 0;
                  margin: 30px;
                  border: 1px solid #3E514A`}
				color='secondary'
				onClick={loadTest}>
				Загрузить тест
			</Button> : null}
			{admin ? <h2>Доступные тесты</h2> : < h1> Выберите нужный тест</h1>}
			<TestList data={data} admin={admin} isUpdate={updateTest}/>
			{admin ? <Button color="secondary" sx={{mt: '20px', border: '1px solid #3E514A'}}
							 onClick={logOf}> Выйти </Button> : null}
			{isPopUp ? <PopUpBox exit={exitPopUp} isUpdate={updateTest} type={popUpType}/> : null}
		</div>
	);
};

const WrappedPage = withLoader(TestListPage)

export default WrappedPage;