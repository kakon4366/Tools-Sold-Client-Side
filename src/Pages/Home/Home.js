import React from "react";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import ContactUs from "./ContactUs/ContactUs";
import Reviews from "./Reviews/Reviews";
import Slider from "./Slider/Slider";
import Subscribe from "./Subscribe/Subscribe";
import Tools from "./Tools/Tools";

const Home = () => {
	return (
		<div>
			<Slider></Slider>
			<Tools></Tools>
			<BusinessSummary></BusinessSummary>
			<Reviews></Reviews>
			<Subscribe></Subscribe>
			<ContactUs></ContactUs>
		</div>
	);
};

export default Home;
