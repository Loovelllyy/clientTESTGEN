import React, {useEffect, useState} from "react";
import {getTest, IGetTest} from "../Requests/requests";
type TProps = React.FunctionComponent<{ dataFromServ: IGetTest, reloadData: () => void }>

function withData(WrappedComponent: TProps ) {

	return () => {

		const [stateData, setStateData] = useState<IGetTest>();

		const reloadData = () => {
			getTest().then(d => {
				setStateData(d);
			});
		}

		useEffect(() => {
			reloadData()
		}, [])
		return <WrappedComponent dataFromServ={stateData} reloadData={reloadData}/>
	};
}

export default withData;