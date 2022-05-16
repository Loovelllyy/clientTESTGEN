import axios from "axios";
import {PATHreq} from "./URLs";

type TMethod = 'get' | 'post' | 'delete' | 'put';
type TUrl = keyof typeof PATHreq;

/*
*
* принимает метод, url и data,
* возвращает Promise с данными типа T
*
* */
export const request = async <T>(method: TMethod, url: TUrl, data?: unknown) => {
	return axios[method]?.<T>(PATHreq[url], data).then(d => d.data);
}