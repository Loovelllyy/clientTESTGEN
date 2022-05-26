import Question from "../../Components/Question";
import {useParams, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getTest} from "../../Requests/requests";
import {useAppDispatch, useAppSelector} from "../../HOOKS/redux";
import {useSelector} from "react-redux";
import {changeCurrentId} from "../../Redux/sliceId";

// interface IProps {
//
// }
// interface IDataFromServer {
// 	quest: string;
// 	answersVar: string[]
// }

const ids: string[] = [];

interface ITest {
	id: string,
	nameTest: string,
}

const QuestionPage = () => {

	let {id} = useParams<string>();

	let nav = useNavigate()

	const select = useAppSelector(state => state.idReducer.id);
	const dispatch = useAppDispatch()

	// const [data, setData] = useState<IDataFromServer[]>();

	useEffect(() => {

		getTest().then(data => {
			console.log(id)
				data.data.map((el: ITest) => {
					ids.push(el.id)
				})}).then(() => {
				if (ids.findIndex((i) => i == id) == -1) {
					nav('/not-found');
				}
				dispatch(changeCurrentId(id))
			})
	}, []);

	return (
		<>
			<Question />
		</>
	)

}

export default QuestionPage;