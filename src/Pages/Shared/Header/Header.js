import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../Images/toolsLogo.png";

const Header = () => {
	const [user] = useAuthState(auth);

	const menuItems = (
		<>
			<li>
				<Link to="/home">Home</Link>
			</li>
			<li>
				<Link to="/all-tools">Tools</Link>
			</li>
			<li>
				<Link to="/protfolio">Protfolio</Link>
			</li>
			<li>
				<Link to="/blog">Blog</Link>
			</li>
			{user && (
				<li>
					<Link to="/dashboard">Dashboard</Link>
				</li>
			)}
			{user ? (
				<button
					onClick={() => {
						signOut(auth);
						localStorage.removeItem("access_token");
					}}
				>
					Logout
				</button>
			) : (
				<>
					<li>
						<Link className="text-secondary" to="/login">
							Login
						</Link>
					</li>
					<li className="border bg-secondary text-white rounded-xl">
						<Link to="/register">Register</Link>
					</li>
				</>
			)}
		</>
	);

	return (
		<header>
			<div className="navbar bg-base-100 border-b-2 shadow-md ">
				<div className="container mx-auto">
					<div className="navbar-start">
						<div className="dropdown">
							<label tabIndex="0" className="btn btn-ghost lg:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</label>
							<ul
								tabIndex="0"
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
							>
								{menuItems}
							</ul>
						</div>
						<Link
							to="/"
							className="btn-sm sm:btn-md btn  btn-ghost normal-case"
						>
							<img className="h-4 sm:h-6" src={logo} alt="" />
						</Link>
					</div>
					<div className="navbar-end hidden lg:flex">
						<ul className="menu menu-horizontal p-0 gap-x-3">
							{menuItems}
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
