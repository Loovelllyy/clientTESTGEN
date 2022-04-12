import React, {useEffect, useState} from "react";
import WaitingPage from "../WaitingPage";
import TestListPage from "../TestListPage";
// import axios from "axios";

const HomePage = () => {
    let [data1, setData1] = useState(0);

    // let data = 0;

    useEffect(() =>{
          setTimeout(()=> {
              setData1(1)
        }, 1000)
        // data = axios.get('');
    }, [])

    if (data1) return <TestListPage />
    else return <WaitingPage />
}

export default HomePage;