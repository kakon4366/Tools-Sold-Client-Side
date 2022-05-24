import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashborad = () => {
	return (
		<section>
			<div className="flex">
				{/* side bar */}
				<div className="bg-accent w-[250px] text-lg p-4 text-white h-screen ">
					<div className="flex flex-col gap-y-4 mt-12">
						<Link to="/dashboard">My Orders</Link>
						<Link to="/dashboard/review">Add A Review</Link>
						<Link to="/dashboard/profile">My Profile</Link>
					</div>
				</div>
				{/* output */}
				<div className="p-12 w-full">
					<h2 className="text-4xl text-primary font-semibold mb-4">
						WelCome to your dashboard
					</h2>
					<Outlet></Outlet>
				</div>
			</div>
		</section>
	);
};

export default Dashborad;
