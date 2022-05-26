import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Purchase = () => {
	const [quantity, setQuantity] = useState(0);
	const [orderMessage, setOrderMessage] = useState("");
	const [quantityError, setQuantityError] = useState("");
	const [user, loading] = useAuthState(auth);

	const email = user?.email;

	const { toolId } = useParams();

	const { data: tool, isLoading } = useQuery(["tool", toolId], () =>
		fetch(`https://mighty-temple-21307.herokuapp.com/product/${toolId}`).then(
			(res) => res.json()
		)
	);

	if (isLoading || loading) {
		return <Loading></Loading>;
	}

	const { name, img, description, price, available } = tool;

	const handlePurchase = (e) => {
		e.preventDefault();
		if (quantity > available) {
			setQuantityError("You can't purchase more than available products!");
		} else if (quantity < 1000) {
			setQuantityError("You have to purchase at least 1000 products");
		} else {
			setQuantityError("");
		}

		//information form
		const userName = e.target.name.value;
		const addressLine1 = e.target.addressLine1.value;
		const addressLine2 = e.target.addressLine2.value;
		const city = e.target.city.value;
		const postalCode = e.target.postalCode.value;
		const phoneNumber = e.target.phoneNumber.value;

		const OrderInfo = {
			productName: name,
			img,
			description,
			price,
			available,
			userName,
			email,
			addressLine1,
			addressLine2,
			city,
			postalCode,
			phoneNumber,
			quantity,
		};

		console.log(quantityError);

		if (quantity > available || quantity < 1000) {
			return;
		} else {
			//post user information to database
			fetch("https://mighty-temple-21307.herokuapp.com/order", {
				method: "POST",
				headers: {
					"content-type": "application/json",
					authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
				body: JSON.stringify(OrderInfo),
			})
				.then((res) => res.json())
				.then((result) => {
					console.log(result);
					if (result.insertedId) {
						setOrderMessage("Order Place Success");
						e.target.reset();
					}
				});
		}
	};

	return (
		<section className="py-12">
			<div className="container mx-auto">
				<div className="flex">
					<div className="w-1/2 px-4">
						<div className="w-full p-12 border-2 rounded-xl">
							<div className="w-96">
								<img className="" src={img} alt="" />
							</div>
							<div className="mt-4">
								<h2 className="text-xl font-semibold">{name}</h2>
								<p>{description}</p>
								<h4 className="text-lg font-semibold mt-2">
									Price: $<span>{price}</span>
								</h4>
								<p className="italic text-slate-500 mt-2">
									Available: {available}
								</p>
								<div className="mt-4">
									<form action="">
										<span>Quantity: </span>
										<input
											onChange={(e) => setQuantity(e.target.value)}
											type="text"
											placeholder="Minimum quantity 1000"
											className="input input-bordered input-sm w-full max-w-[200px]"
										/>
										{quantityError && (
											<div className="mt-4 alert alert-error shadow-lg">
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="stroke-current flex-shrink-0 h-6 w-6"
														fill="none"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
													</svg>
													<span>{quantityError}</span>
												</div>
											</div>
										)}
									</form>
								</div>
							</div>
						</div>
					</div>

					{/* Information form */}
					<div className="w-1/2 bg-purple-300 p-12">
						<h2 className="text-2xl text-center">Your Infomation</h2>
						<div>
							<form onSubmit={handlePurchase} action="">
								<div className="mb-4">
									<label htmlFor="">Name</label>
									<input
										required
										name="name"
										placeholder="Name"
										type="text"
										className="input input-bordered mt-2 w-full"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="">Email</label>
									<input
										required
										defaultValue={email}
										disabled
										type="email"
										className="input input-bordered mt-2 w-full"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="">Address Line 1</label>
									<input
										required
										name="addressLine1"
										placeholder="Address Line 1"
										type="text"
										className="input input-bordered mt-2 w-full"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="">Address Line 2</label>
									<input
										name="addressLine2"
										placeholder="Address Line 2"
										type="text"
										className="input input-bordered mt-2 w-full"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="">City</label>
									<input
										required
										name="city"
										placeholder="City"
										type="text"
										className="input input-bordered mt-2 w-full"
									/>
								</div>
								<div className="flex justify-between">
									<div className="mb-4 w-1/2 pr-3">
										<label htmlFor="">State</label>
										<input
											required
											name="state"
											placeholder="State"
											type="text"
											className="input input-bordered mt-2 w-full"
										/>
									</div>
									<div className="mb-4 w-1/2 pl-3">
										<label htmlFor="">Postal Code</label>
										<input
											required
											name="postalCode"
											placeholder="Postal Code"
											type="text"
											className="input input-bordered mt-2 w-full"
										/>
									</div>
								</div>
								<div className="mb-4">
									<label htmlFor="">Phone Number</label>
									<input
										required
										name="phoneNumber"
										placeholder="Phone Number"
										type="text"
										className="input input-bordered mt-2 w-full"
									/>
								</div>
								<input
									className="btn btn-primary mt-4"
									type="submit"
									value="Purchase"
								/>
							</form>
							{orderMessage && (
								<div className="alert alert-success shadow-lg mt-4">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="stroke-current flex-shrink-0 h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<span>{orderMessage}</span>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Purchase;
