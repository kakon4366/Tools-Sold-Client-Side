import React from "react";
import { useNavigate } from "react-router-dom";
import img404 from "../../../Images/toolgif.gif";

const NotFound404 = () => {
	const navigate = useNavigate();

	return (
		<section>
			<div className="container mx-auto">
				<div className="w-full h-[600px] flex justify-center items-center">
					<div className="text-center">
						<img className="mx-auto" src={img404} alt="" />
						<h2 className="text-5xl mb-3"> 404 Page Not Found</h2>
						<p>
							You can search for the page you want here or return to the
							homepage
						</p>
						<button
							onClick={() => navigate("/home")}
							className="btn btn-accent mt-6"
						>
							Go Home
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound404;
