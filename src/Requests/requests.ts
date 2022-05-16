import {request} from "./index";

interface ITest {
	id: string,
	nameTest: string,
}

interface IGetTest {
	data: ITest[],
	admin: boolean,
}
//
// interface IDataAuth {
// 	login: string,
// 	password: string
// }

export const getTest = () => {
	return request<IGetTest>('get', 'getTests')
}

export const checkedCookie = () => {
	return request<{data: boolean}>('get', 'checkedCookie')
}

export const checkAuth = (data: unknown) => {
	return request<{data: string}>('post', 'auth', data);
}