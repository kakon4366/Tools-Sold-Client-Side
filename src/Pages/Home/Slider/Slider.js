import React from "react";
import tools1 from "../../../Images/tools-1.jpg";
import tools2 from "../../../Images/tools-2.jpg";
import tools3 from "../../../Images/tools-3.jpg";

const Slider = () => {
	return (
		<div className="carousel w-full">
			<div id="slide1" className="carousel-item relative w-full ">
				<img src={tools1} className="w-full" alt="" />{" "}
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide4" className="btn btn-circle">
						❮
					</a>
					<a href="#slide2" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<img src={tools2} className="w-full" alt="" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="btn btn-circle">
						❮
					</a>
					<a href="#slide3" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<img src={tools3} className="w-full" alt="" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="btn btn-circle">
						❮
					</a>
					<a href="#slide4" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Slider;
