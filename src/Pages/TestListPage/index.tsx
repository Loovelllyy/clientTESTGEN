import React, {useCallback, useEffect, useState} from 'react';
import {PATHclient} from "../../Requests/URLs";

import {Button} from "@mui/material";
import {wrapperStyle} from "../../../public/style";
import {css} from "@emotion/react";

import withLoader from "../../HOC/withLoader";
import TestList from '../../Components/TestList';
import PopUpBoxPortal from "../../Components/PopUpBoxPortal";
import {useNavigate} from "react-router-dom";
import {IGetTest} from "../../Requests/requests";
import ExitPopUp from "../../Components/PopUps/ExitPopUp";
import LoadPopUp from "../../Components/PopUps/LoadPopUp";
import withData from "../../HOC/withData";

const TestListPage = ({dataFromServ, reloadData}: { dataFromServ: IGetTest, reloadData: () => void }) => {

	const [data, setData] = useState([]);
	const [admin, setAdmin] = useState(false);
	const [isExitP, setIsExitP] = useState(false);
	const [isLoadP, setIsLoadP] = useState(false);
	const nav = useNavigate();

	useEffect(() => {
		if (dataFromServ?.data) {
			setData(dataFromServ?.data);
			setAdmin(dataFromServ?.admin);
		}
	}, [dataFromServ]);

	const logOf = () => {
		setIsExitP(true);
	};

	const exitPopUp = () => {
		setIsExitP(false);
		setIsLoadP(false);
	};

	const updateTest = useCallback(() => {
		reloadData();
		exitPopUp();
	}, []);


	const loadTest = () => {
		setIsLoadP(true);
	}

	return (
		<div css={wrapperStyle}>
			{admin ?
				<Button
					css={css`position: absolute; top: 0; right: 0; margin: 30px; border: 1px solid #3E514A`}
					color='secondary'
					onClick={loadTest} >Загрузить тест</Button> : null}
			{admin ? <h2>Доступные тесты</h2> : < h1> Выберите нужный тест</h1>}
			<TestList data={data} admin={admin} isUpdate={updateTest}/>
			{admin ? <Button color="secondary" sx={{mt: '20px', border: '1px solid #3E514A'}} onClick={logOf}> Выйти </Button> :
					 <Button color="secondary" sx={{mt: '20px', border: '1px solid #3E514A'}} onClick={() => nav(PATHclient.HomePage)}>На главную</Button>
			}
			{ isExitP && <PopUpBoxPortal exitPopUp={exitPopUp} Child={ <ExitPopUp exitPopUp={exitPopUp} /> } /> }
			{ isLoadP && <PopUpBoxPortal exitPopUp={exitPopUp} Child={ <LoadPopUp isUpdate={ updateTest } /> } /> }
			</div>
	);
};

const WrappedPage = withLoader(withData(TestListPage));

export default WrappedPage;