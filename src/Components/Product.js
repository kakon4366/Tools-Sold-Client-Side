import React from "react";

const Product = ({ product }) => {
	const { name, img, discription, available, price } = product;

	return (
		<div className="card bg-base-100 shadow-xl">
			<figure>
				<img src={img} alt="Shoes" className="w-full" />
			</figure>
			<div className="card-body">
				<h2 className="card-title text-primary">{name}</h2>
				<p>{discription}</p>
				<h4 className="text-lg font-semibold text-secondary">
					Price: $<span>{price}</span>
				</h4>
				<p className="text-sm italic text-slate-600">
					Available: {available}
				</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Order</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
