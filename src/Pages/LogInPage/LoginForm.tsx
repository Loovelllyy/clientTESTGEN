import React, {useEffect} from 'react';
import {css} from "@emotion/react";
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {checkAuth} from "../../Requests/requests";
import * as Yup from "yup";
import {useFormik} from "formik";
import axios from "axios";
import {PATHclient, PATHreq} from "../../Requests/URLs";

const SignupSchema = Yup.object({
	login: Yup.string()
		.min(1, 'Короткий логин')
		.required('Некорректный логин'),
	password: Yup.string()
		.min(1, 'Пароль содержать не менее 8 символов')
		.required('Некорректный пароль'),
});

function LoginForm() {

	const nav = useNavigate();
	const toHome = useNavigate();

	const signUp = (data: unknown) => {
		checkAuth(data).then((d) => {
			if (d.data === 'OK') nav('/testListPage');
			else alert('Error sing in');
		}).catch(() => {
			alert('Что-то пошло не так');
		})
	}

	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			signUp(values);
		},
	});

	useEffect(() => {
		axios.get(PATHreq.checkedCookie).then(d => {
			if (d.data) toHome(PATHclient.HomePage);
		})
	}, [])

	return (
		<form onSubmit={formik.handleSubmit} css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 20px;
			`}>
			<TextField
				id="login"
				name="login"
				label="Логин"
				value={formik.values.login}
				onChange={formik.handleChange}
				error={formik.touched.login && Boolean(formik.errors.login)}
				helperText={formik.touched.login && formik.errors.login}
			/>
			<TextField
				id="password"
				name="password"
				label="Пароль"
				type="password"
				value={formik.values.password}
				onChange={formik.handleChange}
				error={formik.touched.password && Boolean(formik.errors.password)}
				helperText={formik.touched.password && formik.errors.password}
				autoComplete='on'
			/>
			<Button variant='outlined' type="submit">
				Войти
			</Button>

		</form>
	);
}

export default LoginForm;