import React from "react";
import { useNavigate } from "react-router-dom";

const OrderRow = ({ product, index, setDeleteModal }) => {
	const { _id, quantity, img, price, productName } = product;

	const navigate = useNavigate();

	return (
		<tr>
			<th>{index + 1}</th>
			<th>
				<img className="w-24" src={img} alt="" />
			</th>
			<td>{productName}</td>
			<td>${price}</td>
			<td>{quantity}</td>
			<td>${price * quantity}</td>
			<td>
				<div className="flex flex-col">
					<span className="italic">Unpaid</span>
					<button
						onClick={() => navigate(`/payment/${_id}`)}
						className="btn btn-sm w-16 btn-success"
					>
						Pay
					</button>
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
