import React from 'react';

export default ({ updateSort }) => {
	return (
		<div className="sort">
			<select className="sort__input" onChange={updateSort}>
				<option value="ascending">Ascending</option>
				<option value="descending" selected>Descending</option>
			</select>	
		</div>
	);
}