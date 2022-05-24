import React from "react";

const OrderRow = ({ product, index, setDeleteModal }) => {
	const { available, img, price, productName } = product;

	return (
		<tr>
			<th>{index + 1}</th>
			<th>
				<img className="w-24" src={img} alt="" />
			</th>
			<td>{productName}</td>
			<td>{price}</td>
			<td>{available}</td>
			<td>
				<div className="flex flex-col">
					<span className="italic">Unpaid</span>
					<button className="btn btn-sm w-16 btn-success">Pay</button>
				</div>
			</td>
			<td>
				<label
					onClick={setDeleteModal(product)}
					for="deleteModal"
					className="btn btn-warning"
				>
					Cancle
				</label>
			</td>
		</tr>
	);
};

export default OrderRow;
