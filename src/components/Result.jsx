import React from 'react';

export default ({ result }) => {
	const renderStar = stars => {
		let elements = [];

		for (let i = 0; i < stars; i++) {
			elements.push(<span key={i} className="result__star">&#9733;</span>);
		}

		return elements;
	}

	return (
		<div className="result">
			<h3 className="result__title">{result.name}</h3>
			<div className="result__stars">{renderStar(result.starRating)}</div>
			<div>{result.facilities.map((facility, i) => <span key={i} className="result__facility">{facility}</span>)}</div>
		</div>
	);
}