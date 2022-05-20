// import React from "react";
// // import { render } from "react-dom";
// import {cleanup, render} from '@testing-library/react';
// import {act} from "react-dom/test-utils";
// import Test from './index';
// afterEach(cleanup);
// import {createMemoryHistory} from 'history'
// // let container = null;
// // beforeEach(() => {
// // 	container = document.createElement("div");
// // 	document.body.appendChild(container);
// // });
//
// it('renders with or without a name', () => {
// 	// const myTest = <Test nameTest={'name1'} admin={true} id={'sdklfhkd'} isUpdate={() => {}}/>
// 	//
// 	// // act(() => {
// 	// // 	render(myTest, container);
// 	// // });
// 	// // expect(container.textContent).toBe('name1')
// 	// const { getByText } = render(myTest);
// 	// const linkElm = getByText(/name1/i);
// 	// expect(linkElm).toBe('name1');
//
//
//
// 	const history = createMemoryHistory()
// 	const route = '/some-route'
// 	history.push(route)
// 	render(
// 		<Router location={history.location} navigator={history}>
// 			<LocationDisplay />
// 		</Router>,
// 	)
//
// 	expect(screen.getByTestId('location-display')).toHaveTextContent(route)
// });
//
// it('renders with or without a name', () => {
// 	const myTest = <Test nameTest={'sdklfhkd'} admin={true} id={'sdklfhkd'} isUpdate={() => {}}/>
//
// 	// act(() => {
// 	// 	render(myTest, container);
// 	// });
// 	// expect(container.textContent).toBe('sdklfhkd')
// });
//
// it('renders with or without a name', () => {
// 	const myTest = <Test nameTest={''} admin={true} id={'sdklfhkd'} isUpdate={() => {}}/>
//
// 	// act(() => {
// 	// 	render(myTest, container);
// 	// });
// 	// expect(container.textContent).toBe('')
// });
