import React from "react";

const ManageAllOrdersRow = ({ product, index }) => {
	const { _id, quantity, img, paid, price, productName } = product;

	const handleShipped = (id) => {};

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
			<td>${price}</td>
			<td>{quantity}</td>
			<td>${price * quantity}</td>
			<td>
				{paid ? (
					<span className="italic">Paid</span>
				) : (
					<span className="italic">Unpaid</span>
				)}
			</td>
			<td>
				<button
					onClick={() => handleShipped(_id)}
					disabled={paid ? false : true}
					className="btn btn-sm"
				>
					unshiped
				</button>
			</td>
		</tr>
	);
};

export default ManageAllOrdersRow;
