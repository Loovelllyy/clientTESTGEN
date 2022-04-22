import Question from "../../Components/Question";
import {useParams, Navigate} from "react-router-dom";

// interface IProps {
//
// }

const ids = [0, 1]

const QuestionPage = () => {
	let { id } = useParams();

	// @ts-ignore
	if(ids.findIndex((i) => i == id) == -1) {
		return <Navigate to='/not-found' replace />
	}

	return (
		<>
			<Question />
		</>
	)

}

export default QuestionPage;