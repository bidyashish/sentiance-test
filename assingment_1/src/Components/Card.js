import React from "react";
import "./Card.css";

// Card Component 
const Card = () => {
	return (
		<div className="card my-5">
			<div className="card-body">
				<h5 className="card-title">Lorem ipsum dolor sit amet consectetur</h5>
				<p className="card-text">
					Lorem Cum, assumenda. Error odio officiis molestias. Id assumenda
					deleniti nostrum, blanditiis, deserunt totam quia consequatur,
					consequuntur temporibus aliquid quibusdam natus dolores omnis.
				</p>
				<a href="#" className="card-link card-status">
					FE
				</a>
				<a href="#" className="card-link float-right card-time">
					Today
				</a>
			</div>
		</div>
	);
};
export default Card;
