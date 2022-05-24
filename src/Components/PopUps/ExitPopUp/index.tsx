import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {PATHclient} from "../../../Requests/URLs";
import {css} from "@emotion/react";
import {request} from "../../../Requests";


function ExitPopUp() {

	const goHome = useNavigate();

	const exitAdmin = () => {
		request('get', 'deleteCookie').then(() => {
			goHome(PATHclient.HomePage);
		})
	}

	return (
		<>
			<p>Вы действительно хотите выйти?</p>
			<Button color='secondary' onClick={exitAdmin}>Да, хочу выйти</Button>
			<Button color='secondary' css={css`border: 1px solid #2e4f47`}>Нет, хочу остаться</Button>
		</>
	);
}

export default ExitPopUp;