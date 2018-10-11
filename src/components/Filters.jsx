import React from 'react';

export default ({ updateFilters }) => {
	return (
		<div className="filters">
			<div>
				<input className="filters__option" onChange={updateFilters} type="checkbox" id="pool" value="pool" />
				<label htmlFor="pool">Pool</label>
			</div>
			<div>
				<input className="filters__option" onChange={updateFilters} type="checkbox" id="car park" value="car park" />
				<label htmlFor="car park">Car Park</label>
			</div>
			<div>
				<input className="filters__option" onChange={updateFilters} type="checkbox" id="gym" value="gym" />
				<label htmlFor="gym">Gym</label>
			</div>
		</div>
	);
}