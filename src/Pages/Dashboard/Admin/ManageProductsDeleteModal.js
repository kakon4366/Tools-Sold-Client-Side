import React from "react";
import { toast } from "react-toastify";

const ManageProductsDeleteModal = ({
	setDeleteProduct,
	deleteProduct,
	refetch,
}) => {
	const { _id } = deleteProduct;

	const handleProductDelete = (id) => {
		fetch(`http://localhost:5000/product/${id}`, {
			method: "DELETE",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					setDeleteProduct(null);
					refetch();
					toast.success("Product Delete Success!");
				}
			});
	};

	return (
		<div>
			<input
				type="checkbox"
				id="mamage-products-delete-modal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">
						Congratulations random Interner user!
					</h3>
					<p className="py-4">
						You've been selected for a chance to get one year of
						subscription to use Wikipedia for free!
					</p>
					<div className="modal-action">
						<button
							onClick={() => handleProductDelete(_id)}
							className="btn btn-sm btn-secondary"
						>
							Delete
						</button>
						<label
							htmlFor="mamage-products-delete-modal"
							className="btn btn-sm"
						>
							Cancle
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageProductsDeleteModal;
