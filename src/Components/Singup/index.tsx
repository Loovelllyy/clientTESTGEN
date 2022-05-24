import React from 'react';
import axios from "axios";
import LoginForm from "../../Pages/LogInPage/LoginForm";

axios.defaults.withCredentials = true;

function SignUp() {

	return (
		<div>
			<h1>Выполните вход</h1>
			<LoginForm />
		</div>
	);
}

export default SignUp;