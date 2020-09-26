import React from 'react'
import Card from './Card'

// Container Compoment
const Container = () => {
	return (
		<div className="container-fluid m-5">
			<div className="row m-5 justify-content-around">
				<div className="md-4">
					<h2 className="my-3 mb-5">Backlog</h2>
					<Card />
					<Card />
					<Card />
				</div>
				<div className="md-4">
					<h2 className="my-3 mb-5">Todo</h2>
					<Card />
					<Card />
					<Card />
				</div>
				<div className="md-4">
					<h2 className="my-3 mb-5">Done</h2>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Container;
