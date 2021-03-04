import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Cards from "./Cards";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbo />
				<div className="row">
					<div className="col">
						<Cards images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGO2N6UF0k2GWqU_qyYhGBuoxvpLVVreeQQ&usqp=CAU" />
					</div>
					<div className="col">
						<Cards images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspESxDnxcqRDsz0w1HZ5IYqYXmSxbGpZBZw&usqp=CAU" />
					</div>
					<div className="col">
						<Cards images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGO2N6UF0k2GWqU_qyYhGBuoxvpLVVreeQQ&usqp=CAU" />
					</div>
					<div className="col">
						<Cards images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGO2N6UF0k2GWqU_qyYhGBuoxvpLVVreeQQ&usqp=CAU" />
					</div>
				</div>
			</div>
		</div>
	);
}
