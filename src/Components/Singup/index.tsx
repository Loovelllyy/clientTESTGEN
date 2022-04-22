import React from 'react';
import * as Yup from "yup";
import {useFormik} from "formik";
import {css} from "@emotion/react";
import {Button, TextField } from "@mui/material";
import axios from "axios";
import {Route, useNavigate, useParams} from "react-router-dom";

axios.defaults.withCredentials = true

function SignUp() {
	const nav = useNavigate();

	const signUp = (data: {login: string, password: string}) => {

		axios.post('http://localhost:3030/signIn', data, {headers: { 'Authorization':  `Basic slfklsdkflksd`}})
			.then((d) => {
				if(d.data === 'OK') nav('/testListPage')
				else alert('Error sing in')
			})
			.catch(e => {
				alert('Что-то пошло не так')
			})
			// .then(d => console.log(d))
	}

	const SignupSchema = Yup.object({
		login: Yup.string()
			.min(1, 'Короткий логин')
			.required('Некорректный логин'),
		password: Yup.string()
			.min(1, 'Пароль содержать не менее 8 символов')
			.required('Некорректный пароль'),
	});

	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			signUp(values);
			console.log(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div>
			<h1>Выполните вход</h1>
			<form onSubmit={formik.handleSubmit}  css={css`
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
				/>
				<Button variant='outlined' type="submit">
					Войти
				</Button>

			</form>
		</div>
	);
}

export default SignUp;