// import React from 'react';
// import TestList from "../../Components/TestList";
// import withLoader from "../../HOC/withLoader";
// import {wrapperStyle} from "../../../public/style";
//
// interface IProps {
// 	id: number,
// 	nameTest: string,
// }
//
// function AdminPage(data: IProps[]) {
// 	return (
// 		<div css={wrapperStyle}>
// 			<h2>Вы можете добавить или удалить тест, а так же редактировать название</h2>
// 			<TestList data={data} admin={true}/>
// 		</div>
// 	);
// }
//
// const WrappedPage = withLoader(AdminPage, '', true);
//
// export default WrappedPage;