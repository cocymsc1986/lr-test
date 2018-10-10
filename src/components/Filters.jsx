import React from 'react';

export default ({ updateFilters }) => {
	return (
		<div className="filters">
			<div>
				<label htmlFor="pool">Pool</label>
				<input className="filters__option" onChange={updateFilters} type="checkbox" id="pool" value="pool" />
			</div>
			<div>
				<label htmlFor="car park">Car Park</label>
				<input className="filters__option" onChange={updateFilters} type="checkbox" id="car park" value="car park" />
			</div>
			<div>
				<label htmlFor="gym">Gym</label>
				<input className="filters__option" onChange={updateFilters} type="checkbox" id="gym" value="gym" />
			</div>
		</div>
	);
}