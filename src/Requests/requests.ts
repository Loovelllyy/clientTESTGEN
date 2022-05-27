import {request} from "./index";

interface ITest {
	id: string,
	nameTest: string,
}

export interface IGetTest {
	data: ITest[],
	admin: boolean,
}

interface IQuestions {
	question: string;
	answer: string[];
	correct?: string;
}

export const getTest = () => {
	return request<IGetTest>('get', 'getTests');
}

export const checkedCookie = () => {
	return request<{data: boolean}>('get', 'checkedCookie');
}

export const checkAuth = (data: unknown) => {
	return request<{data: string}>('post', 'auth', data);
}

export const getQuestions = (query: string) => {
	return request<IQuestions[]>('get', 'getTestById', {data: null}, query);
}