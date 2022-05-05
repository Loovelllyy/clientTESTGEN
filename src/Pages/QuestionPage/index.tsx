import Question from "../../Components/Question";
import {useParams, Navigate} from "react-router-dom";
import axios from "axios";
import {PATHreq} from "../../URLs";
import {useEffect} from "react";

// interface IProps {
//
// }

const ids: string[] = []

const QuestionPage = () => {

	let { id } = useParams();


	useEffect(() => {
		axios.get(PATHreq.getTests).then(d => {
			d.data.map((el: {id: string}) => ids.push(el.id));
			if(ids.findIndex((i) => i == id) == -1) {
				return <Navigate to='/not-found' replace />
			}
		})

	}, []);


	// @ts-ignore


	return (
		<>
			<Question />
		</>
	)

}

export default QuestionPage;