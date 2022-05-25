import React, { useEffect, useState } from "react";

const ManageProductEditModal = ({ editProduct, setEditProduct, refetch }) => {
	const [product, setProduct] = useState({});
	const { _id } = editProduct;

	useEffect(() => {
		const url = `http://localhost:5000/edit-product/${_id}`;
		fetch(url, {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
			});
	}, [_id]);

	const { _id: editedId, name, description, available, price } = product;

	const handlerEditProduct = (e) => {
		e.preventDefault();
		const productName = e.target.name.value;
		const productDescription = e.target.description.value;
		const productAvailable = e.target.available.value;
		const productPrice = e.target.price.value;

		const updatedProduct = {
			productName,
			productDescription,
			productAvailable,
			productPrice,
		};

		console.log(updatedProduct);
		fetch(`http://localhost:5000/product/${editedId}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
			body: JSON.stringify(updatedProduct),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					setEditProduct(null);
					refetch();
				}
			});
	};

	return (
		<div>
			<input
				type="checkbox"
				id="manage-product-edit-modal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box relative">
					<label
						htmlFor="manage-product-edit-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<h3 className="text-lg font-bold">Edit this Product</h3>
					<form onSubmit={handlerEditProduct} action="">
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text">Product Name</span>
							</label>
							<input
								required
								defaultValue={name}
								name="name"
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full "
							/>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text">Description</span>
							</label>
							<textarea
								required
								defaultValue={description}
								name="description"
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full"
							/>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text">Available</span>
							</label>
							<input
								required
								defaultValue={available}
								name="available"
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full "
							/>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text">Price</span>
							</label>
							<input
								required
								defaultValue={price}
								name="price"
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full "
							/>
						</div>
						<input
							type="submit"
							value="Update"
							className="btn btn-primary mt-4"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ManageProductEditModal;
