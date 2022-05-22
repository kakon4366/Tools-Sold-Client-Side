import React from "react";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Slider from "./Slider/Slider";
import Tools from "./Tools/Tools";

const Home = () => {
	return (
		<div>
			<Slider></Slider>
			<Tools></Tools>
			<BusinessSummary></BusinessSummary>
		</div>
	);
};

export default Home;
