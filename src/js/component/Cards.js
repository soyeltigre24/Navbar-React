import React from "react";
import PropTypes from "prop-types";

const Cards = ({ images }) => {
	return (
		// <div className="card-group ">
		<div className="card">
			<img src={images} className="card-img-top" alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural
					lead-in to additional content. This content is a little bit
					longer.
				</p>
				<button type="button" className="btn btn-primary">
					Buy Now
				</button>
			</div>
			<div className="card-footer">
				<small className="text-muted">Last updated 3 mins ago</small>
			</div>
		</div>
		// <div className="card">
		// 	<img
		// 		src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspESxDnxcqRDsz0w1HZ5IYqYXmSxbGpZBZw&usqp=CAU"
		// 		className="card-img-top"
		// 		alt="..."></img>
		// 	<div className="card-body">
		// 		<h5 className="card-title">Card title</h5>
		// 		<p className="card-text">
		// 			This card has supporting text below as a natural lead-in
		// 			to additional content.
		// 		</p>
		// 		<button type="button" className="btn btn-primary">
		// 			Buy Now
		// 		</button>
		// 	</div>
		// 	<div className="card-footer">
		// 		<small className="text-muted">
		// 			Last updated 3 mins ago
		// 		</small>
		// 	</div>
		// </div>
		// <div className="card">
		// 	<img
		// 		src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsp5_Y_JwZFpOnN68bsqy6e-Fsbi8kZDj0zw&usqp=CAU"
		// 		className="card-img-top"
		// 		alt="..."></img>
		// 	<div className="card-body">
		// 		<h5 className="card-title">Card title</h5>
		// 		<p className="card-text">
		// 			This is a wider card with supporting text below as a
		// 			natural lead-in to additional content. This card has
		// 			even longer content than the first to show that equal
		// 			height action.
		// 		</p>
		// 		<button type="button" className="btn btn-primary">
		// 			Buy Now
		// 		</button>
		// 	</div>
		// 	<div className="card-footer">
		// 		<small className="text-muted">
		// 			Last updated 3 mins ago
		// 		</small>
		// 	</div>
		// </div>
		// </div>
	);
};
Cards.propTypes = {
	images: PropTypes.string
};
export default Cards;
