import React from 'react';
import {css} from "@emotion/react";

import Form from "../../HookFormsComponents/Form";

interface IProps {
	isUpdate: () => void
}

function LoadPopUp({isUpdate}: IProps) {

	return (
		<div css={css`position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around`}>
			<p>Выберете файл, который хотите загрузить. Помните, что поддерживается только формат .txt с верным форматированием</p>
			<Form isUpdate={isUpdate}/>
		</div>
	);
}

export default LoadPopUp;