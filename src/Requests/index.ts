import axios from "axios";
import {PATHreq} from "./URLs";

type TMethod = 'get' | 'post' | 'delete' | 'put';
type TUrl = keyof typeof PATHreq;

/*
*
* возвращает Promise с данными переданного типа (<T>)
*
* @param url (:string)
* @param method - метод axios (:string)
* @param data (необязательный) данные для отправки (: unknown)
* @query (необязательный) выполнит запрос типа axios.method(url?id=query)
*
* */
export const request = async <T>(method: TMethod, url: TUrl, data?: unknown, query?: string) => {
	if (query) return axios[method]?.<T>(`${PATHreq[url]}?id=${query}`, data).then(d => d.data);
	return axios[method]?.<T>(PATHreq[url], data).then(d => d.data);
}