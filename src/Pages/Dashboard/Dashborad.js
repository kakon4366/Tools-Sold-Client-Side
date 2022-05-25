import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashborad = () => {
	const [user] = useAuthState(auth);
	const [admin] = useAdmin(user);
	return (
		<section>
			<div className="flex">
				{/* side bar */}
				<div className="bg-accent w-[250px] text-lg p-4 text-white h-screen ">
					<div className="flex flex-col gap-y-4 mt-12">
						{admin || (
							<>
								<Link to="/dashboard/myorder">My Orders</Link>
								<Link to="/dashboard/review">Add A Review</Link>
							</>
						)}
						<Link to="/dashboard">My Profile</Link>

						{admin && (
							<>
								<Link to="/dashboard/make-admin">Make Admin</Link>
								<Link to="/dashboard/manage-all-orders">
									Manage All Orders
								</Link>
								<Link to="/dashboard/manage-products">
									Manage Products
								</Link>
							</>
						)}
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
