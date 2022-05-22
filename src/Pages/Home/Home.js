import React from "react";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Reviews from "./Reviews/Reviews";
import Slider from "./Slider/Slider";
import Tools from "./Tools/Tools";

const Home = () => {
	return (
		<div>
			<Slider></Slider>
			<Tools></Tools>
			<BusinessSummary></BusinessSummary>
			<Reviews></Reviews>
		</div>
	);
};

export default Home;
