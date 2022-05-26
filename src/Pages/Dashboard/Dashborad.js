import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import { XIcon, MenuIcon } from "@heroicons/react/solid";

const Dashborad = () => {
	const [user] = useAuthState(auth);
	const [admin] = useAdmin(user);
	const [isMenu, setIsMenu] = useState(false);

	return (
		<section>
			<div className="flex">
				{/* side bar */}
				<div
					className={`bg-accent absolute w-[254px] lg:static ${
						isMenu ? "" : " -left-64"
					}  lg:block  text-lg p-4 text-white h-screen`}
				>
					<button
						onClick={() => setIsMenu(!isMenu)}
						className="absolute lg:hidden bg-accent p-2 top-0 -right-8"
					>
						{isMenu ? (
							<XIcon className="h-5 w-5 text-white" />
						) : (
							<MenuIcon className="h-5 w-5 text-white" />
						)}
					</button>
					<div
						className={`flex flex-col gap-y-4 mt-12 ${
							isMenu ? "" : "overflow-hidden"
						}`}
					>
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
								<Link to="/dashboard/add-product">Add A Product</Link>
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
