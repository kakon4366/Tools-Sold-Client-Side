import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const Purchase = () => {
	const [quantity, setQuantity] = useState(0);
	const [quantityError, setQuantityError] = useState("");

	const { toolId } = useParams();

	const { data: tool, isLoading } = useQuery(["tool", toolId], () =>
		fetch(`http://localhost:5000/product/${toolId}`).then((res) => res.json())
	);

	if (isLoading) {
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
											class="input input-bordered input-sm w-full max-w-[200px]"
										/>
										{quantityError && (
											<div class="mt-4 alert alert-error shadow-lg">
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="stroke-current flex-shrink-0 h-6 w-6"
														fill="none"
														viewBox="0 0 24 24"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
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

					<div className="w-1/2 bg-purple-300 p-12">
						<h2 className="text-2xl text-center">Your Infomation</h2>
						<div>
							<form onSubmit={handlePurchase} action="">
								<div className="mb-4">
									<label htmlFor="">Name</label>
									<input
										type="text"
										class="input input-bordered mt-2 w-full"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="">Email</label>
									<input
										type="email"
										class="input input-bordered mt-2 w-full"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="">Address Line 1</label>
									<input
										placeholder="Address Line 1"
										type="text"
										class="input input-bordered mt-2 w-full"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="">Address Line 2</label>
									<input
										placeholder="Address Line 2"
										type="text"
										class="input input-bordered mt-2 w-full"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="">City</label>
									<input
										placeholder="City"
										type="text"
										class="input input-bordered mt-2 w-full"
									/>
								</div>
								<div className="flex justify-between">
									<div className="mb-4 w-1/2 pr-3">
										<label htmlFor="">State</label>
										<input
											placeholder="State"
											type="text"
											class="input input-bordered mt-2 w-full"
										/>
									</div>
									<div className="mb-4 w-1/2 pl-3">
										<label htmlFor="">Postal Code</label>
										<input
											placeholder="Postal Code"
											type="text"
											class="input input-bordered mt-2 w-full"
										/>
									</div>
								</div>
								<div className="mb-4">
									<label htmlFor="">Phone Number</label>
									<input
										placeholder="Phone Number"
										type="text"
										class="input input-bordered mt-2 w-full"
									/>
								</div>
								<input
									className="btn btn-primary mt-4"
									type="submit"
									value="Purchase"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Purchase;
