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
			<Jumbo />
			<Cards />
		</div>
	);
}
