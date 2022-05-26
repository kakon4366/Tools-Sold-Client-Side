import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddAProduct = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const imageStorageKey = "6b04d9644890fb0c1445df403e1fbd5a";

	const onSubmit = (data, e) => {
		e.preventDefault();

		const image = data.image[0];
		const formData = new FormData();
		formData.append("image", image);

		console.log(data);

		const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.success) {
					const img = result.data.url;
					const newProduct = {
						img: img,
						name: data.productName,
						description: data.description,
						price: data.price,
						available: data.available,
					};

					fetch("https://mighty-temple-21307.herokuapp.com/new-product", {
						method: "POST",
						headers: {
							"content-type": "application/json",
							authorization: `Bearer ${localStorage.getItem(
								"access_token"
							)}`,
						},
						body: JSON.stringify(newProduct),
					})
						.then((res) => res.json())
						.then((result) => {
							if (result.insertedId) {
								toast.success("Product Add Success!");
								e.target.reset();
							}
						});
				}
			});
	};

	return (
		<div>
			<div className="border  w-full md:w-3/4 bg-blue-100  lg:w-1/2 p-8">
				<h2 className="text-2xl text-center mb-4">Add A New Product</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex items-center">
						<input
							type="file"
							{...register("image", {
								required: {
									value: true,
									message: "Product Imge is Required",
								},
							})}
						/>
						<label className="label">
							{errors.image?.type === "required" && (
								<span className="label-text-alt text-red-500">
									{errors.image.message}
								</span>
							)}
						</label>
					</div>

					<div className="mt-6">
						<div className="mt-4">
							<div className="text-xl mb-4">
								<label htmlFor="">Product Name</label>
								<input
									className="input input-bordered w-full ml-2"
									type="text"
									placeholder="Product Name"
									{...register("productName", {
										required: {
											value: true,
											message: "Product Name is Required",
										},
									})}
								/>
								<label className="label">
									{errors.productName?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.productName.message}
										</span>
									)}
								</label>
							</div>
							<div className="text-xl mb-4">
								<label htmlFor="">Description</label>
								<textarea
									className="input input-bordered h-16 w-full ml-2"
									type="text"
									placeholder="Product Name"
									{...register("description", {
										required: {
											value: true,
											message: "Description is Required",
										},
									})}
								></textarea>

								<label className="label">
									{errors.description?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.description.message}
										</span>
									)}
								</label>
							</div>

							<div className="text-xl mb-4">
								<label htmlFor="">Price</label>
								<input
									className="input input-bordered w-full ml-2"
									type="text"
									placeholder="Price"
									{...register("price", {
										required: {
											value: true,
											message: "Price is Required",
										},
									})}
								/>
								<label className="label">
									{errors.price?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.price.message}
										</span>
									)}
								</label>
							</div>

							<div className="text-xl mb-4">
								<label htmlFor="">Available</label>
								<input
									className="input input-bordered w-full ml-2"
									type="text"
									placeholder="Available Product"
									{...register("available", {
										required: {
											value: true,
											message: "Available is Required",
										},
									})}
								/>
								<label className="label">
									{errors.available?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.available.message}
										</span>
									)}
								</label>
							</div>
						</div>
					</div>
					<input type="submit" value="Add" className="btn btn-primary" />
				</form>
			</div>
		</div>
	);
};

export default AddAProduct;
