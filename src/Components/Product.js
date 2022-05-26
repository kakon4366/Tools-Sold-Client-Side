import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Product = ({ product }) => {
	const [user] = useAuthState(auth);
	const [admin] = useAdmin(user);
	const { _id, name, img, description, available, price } = product;

	const navigate = useNavigate();

	return (
		<div className="card bg-base-100 shadow-xl">
			<figure>
				<img src={img} alt="Shoes" className="w-full" />
			</figure>
			<div className="card-body">
				<h2 className="card-title text-primary">{name}</h2>
				<p>{description}</p>
				<h4 className="text-lg font-semibold text-secondary">
					Price: $<span>{price}</span>
				</h4>
				<p className="text-sm italic text-slate-600">
					Available: {available}
				</p>
				<div className="card-actions justify-end">
					{admin ? (
						<button
							onClick={() => navigate("/dashboard/manage-products")}
							className="btn btn-secondary"
						>
							Manage
						</button>
					) : (
						<button
							onClick={() => navigate(`/purchase/${_id}`)}
							className="btn btn-primary"
						>
							Order
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Product;
