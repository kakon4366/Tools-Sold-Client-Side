import React from "react";

const ManageProductsRow = ({
	product,
	index,
	setDeleteProduct,
	setEditProduct,
}) => {
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
					<label
						onClick={() => setEditProduct(product)}
						htmlFor="manage-product-edit-modal"
						className="btn btn-sm btn-warning mr-2"
					>
						Edit
					</label>
					<label
						onClick={() => setDeleteProduct(product)}
						htmlFor="mamage-products-delete-modal"
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
