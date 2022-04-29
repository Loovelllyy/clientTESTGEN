const PORT = 3030;

export const HOST = `http://localhost:${PORT}/`;

export const PATHreq = {
	auth: `${HOST}auth`,
	checkedCookie: `${HOST}checkedCookie`,
	getTests: `${HOST}getTests`,
	deleteCookie: `${HOST}deleteCookie`,
	deleteTest: `${HOST}deleteTest`,
	saveTest: `${HOST}saveTest`,
}

export const PATHclient = {
	AdminPage: '/adminPanel',
	HomePage: '/',
	LogInPage: '/logIn',
	QuestionPage: '`/question/:id`',
	ResultPage: '/result',
	TestListPage: '/testListPage',
}