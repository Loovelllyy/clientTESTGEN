export const parseFunc = (inputText: string) => {

	interface IResultObj { //qw
		question: string,
		answer: Array<string>;
	}

	const objArr: IResultObj[] = [];

	const testArr: string[] = inputText.split(/[\r\n|\r|\n]/);
	console.log(testArr)

	let correct: string[] = [];

	let newObj: IResultObj = {question: '', answer: []}

	for (let i = 0; i < testArr.length; i++) {

		if (/\d/.test(testArr[i])) {
			newObj.question = testArr[i];
		}

		else if (/\D/.test(testArr[i])) {
			console.log('testtesttest', testArr[i])
			if (/correct/.test(testArr[i])) {
				correct.push(testArr[i].split(' ')[1]);
				continue
			}
			else newObj.answer.push(testArr[i]);
		}

		else {
			objArr.push(newObj);
			newObj = {question: '', answer: []}
		}
	}

	return [objArr, correct];
}
// export const parseFunc = (inputText: string) => {
// 	interface IResultObj { //qw
// 		question: string,
// 		answer: Array<string>;
// 	}
// 	const testArr: string[] = inputText.split('*');
// 	console.log('testArr', testArr)
// 	const objArr: IResultObj[] = [];
// 	let newObj: IResultObj = {question: '', answer: []};
// 	let correct: string[] = [];
// 	for (let i = 0; i < testArr.length; i++){
// 		if (/\d\. \D/g.test(testArr[i])) {
// 			newObj.question = testArr[i];
// 		}
// 		else if (/\D\. \D/g.test(testArr[i])) {
// 			newObj.answer.push(testArr[i]);
// 		}
// 		else if(/correct/.test(testArr[i])) {
// 			correct.push(testArr[i].split(' ')[1]);
// 		}
// 		objArr.push(newObj);
// 		newObj = {question: '', answer: []}
// 	}
// 	console.log(objArr, correct)
// 	return [objArr, correct];
// }