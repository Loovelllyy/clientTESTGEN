export const parseFunc = (inputText: string) => {
	interface IResultObj {
		question: string,
		answer: Array<string>;
		correct: string;
	}

	const objArr: IResultObj[] = [];

	const testArr: string[] = inputText.split(/[\r\n|\r|\n]/);

	let newObj: IResultObj = {question: '', answer: [], correct: ''}

	for (let i = 0; i < testArr.length; i++) {
		if (/\d/.test(testArr[i])) {
			newObj.question = testArr[i];
		}

		else if (/\D/.test(testArr[i])) {
			if (/correct/.test(testArr[i])) {
				newObj.correct = testArr[i];
				continue
			}
			newObj.answer.push(testArr[i]);
		}
		else {
			objArr.push(newObj);
			newObj = {question: '', answer: [], correct: ''}
		}
	}

	return objArr;
}