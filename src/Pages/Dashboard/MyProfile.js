import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import avater from "../../Images/avatar.jpg";
import Loading from "../Shared/Loading/Loading";

const MyProfile = () => {
	const [user, loading] = useAuthState(auth);

	const imageStorageKey = "6b04d9644890fb0c1445df403e1fbd5a";

	const email = user?.email;

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data, e) => {
		e.preventDefault();

		const image = data.image[0];
		const formData = new FormData();
		formData.append("image", image);

		const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.success) {
					const img = result.data.url;
					const user = {
						fullName: data.fullName,
						image: img,
						phoneNumber: data.phoneNumber,
						addressLine1: data.addressLine1,
						addressLine2: data.addressLine2,
						city: data.city,
						state: data.state,
						postalCode: data.postalCode,
					};
					// update user to database
					fetch(`http://localhost:5000/profile/${email}`, {
						method: "PUT",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(user),
					})
						.then((res) => res.json())
						.then((result) => console.log("profile result", result));
				}
			});

		console.log(data);
	};

	if (loading) {
		return <Loading></Loading>;
	}

	return (
		<div>
			<h2 className="text-3xl mb-4 text-secondary font-semibold">
				Edit Infomation
			</h2>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex items-center">
						<img
							className="w-36 mr-4"
							src={user?.photoURL || avater}
							alt=""
						/>
						<input
							type="file"
							{...register("image", {
								required: {
									value: true,
									message: "Image is Required",
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
						<h2 className="text-3xl">Account Information</h2>
						<div className="mt-4">
							<div className="text-xl mb-4">
								<label htmlFor="">Full Name:</label>
								<input
									className="input input-bordered w-full max-w-xs ml-2"
									type="text"
									placeholder="Full Name"
									{...register("fullName", {
										required: {
											value: true,
											message: "Full Name is Required",
										},
									})}
								/>
								<label className="label">
									{errors.fullName?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.fullName.message}
										</span>
									)}
								</label>
							</div>
							<div className="text-xl mb-4">
								<label htmlFor="">Email Address:</label>
								<input
									className="input input-bordered w-full max-w-xs ml-2"
									type="email"
									placeholder="Email Address"
									value={email}
									disabled
								/>
							</div>
							<div className="text-xl mb-4">
								<label htmlFor="">Phone Number:</label>
								<input
									className="input input-bordered w-full max-w-xs ml-2"
									type="number"
									placeholder="Phone Number"
									{...register("phoneNumber", {
										required: {
											value: true,
											message: "Phone Number is Required",
										},
									})}
								/>
								<label className="label">
									{errors.phoneNumber?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.phoneNumber.message}
										</span>
									)}
								</label>
							</div>
							<div className="text-xl mb-4">
								<label htmlFor="">Address Line 1:</label>
								<input
									className="input input-bordered w-full max-w-xs ml-2"
									type="text"
									placeholder="Address Line 1"
									{...register("addressLine1", {
										required: {
											value: true,
											message: "Address Line 1 is Required",
										},
									})}
								/>
								<label className="label">
									{errors.addressLine1?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.addressLine1.message}
										</span>
									)}
								</label>
							</div>
							<div className="text-xl mb-4">
								<label htmlFor="">Address Line 2:</label>
								<input
									className="input input-bordered w-full max-w-xs ml-2"
									type="text"
									placeholder="Address Line 2"
									{...register("addressLine2")}
								/>
							</div>
							<div className="text-xl mb-4">
								<label htmlFor="">City:</label>
								<input
									className="input input-bordered w-full max-w-xs ml-2"
									type="text"
									placeholder="City"
									{...register("city", {
										required: {
											value: true,
											message: "City is Required",
										},
									})}
								/>
								<label className="label">
									{errors.city?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.city.message}
										</span>
									)}
								</label>
							</div>
							<div className="text-xl mb-4">
								<label htmlFor="">State:</label>
								<input
									className="input input-bordered w-full max-w-xs ml-2"
									type="text"
									placeholder="State"
									{...register("state", {
										required: {
											value: true,
											message: "State is Required",
										},
									})}
								/>
								<label className="label">
									{errors.state?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.state.message}
										</span>
									)}
								</label>
							</div>
							<div className="text-xl mb-4">
								<label htmlFor="">Postal Code:</label>
								<input
									className="input input-bordered w-full max-w-xs ml-2"
									type="text"
									placeholder="Postal Code"
									{...register("postalCode", {
										required: {
											value: true,
											message: "Postal Code is Required",
										},
									})}
								/>
								<label className="label">
									{errors.postalCode?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.postalCode.message}
										</span>
									)}
								</label>
							</div>
						</div>
					</div>
					<input type="submit" value="Save" className="btn btn-primary" />
				</form>
			</div>
		</div>
	);
};

export default MyProfile;
