import React from 'react';
import style from './style.module.css'

function Loader() {
	return (
		<div className={ style.wrapper }>
			<div className={style.ldsRoller}>
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>

	);
}

export default Loader;