import React from "react";

const ManageProductsRow = ({ product, index, setDeleteProduct }) => {
	const { name, img, available, price } = product;
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
			<td>{name}</td>
			<td>${price}</td>
			<td>{available}</td>
			<td>
				<div>
					<button className="btn btn-sm btn-warning mr-2">Edit</button>
					<label
						onClick={() => setDeleteProduct(product)}
						for="mamage-products-delete-modal"
						className="btn btn-sm btn-secondary"
					>
						Delete
					</label>
				</div>
			</td>
		</tr>
	);
};

export default ManageProductsRow;
