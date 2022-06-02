import React from "react";
import { toast } from "react-toastify";

const ManageAllOrdersRow = ({ product, index, refetch }) => {
	const { _id, quantity, shipping, img, paid, price, productName } = product;

	const handleShipped = (id) => {
		if (shipping) {
			return toast.error("Product an already shiped!");
		}

		fetch(`http://localhost:5000/shipping-product/${id}`, {
			method: "PATCH",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success("Your product is Shiped!");
					refetch();
				}
			});
	};

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
					{shipping ? "Shiped" : "unshiped"}
				</button>
			</td>
		</tr>
	);
};

export default ManageAllOrdersRow;
