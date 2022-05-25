import React from "react";

const ManageAllOrdersRow = ({ product, index }) => {
	const { quantity, img, price, productName } = product;

	return (
		<tr>
			<td>{index + 1}</td>
			<td>
				<div className="avatar">
					<div className="w-24 rounded">
						<img src={img} alt="" />
					</div>
				</div>
			</td>
			<td>{productName}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			<td>{price * quantity}</td>
			<td>
				<span className="italic">Unpaid</span>
			</td>
			<td>
				<button className="btn btn-sm">unshiped</button>
			</td>
		</tr>
	);
};

export default ManageAllOrdersRow;
