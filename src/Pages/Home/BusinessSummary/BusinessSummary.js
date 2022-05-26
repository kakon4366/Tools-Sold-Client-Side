import React from "react";
import bgImg from "../../../Images/banner/tools-3.jpg";
import useProducts from "../../../Hooks/useProducts";
import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "react-query";

const BusinessSummary = () => {
	const [products, isLoading] = useProducts();

	const { data: reviews, isLoading: reviewLoading } = useQuery(
		"allReviews",
		() =>
			fetch("https://mighty-temple-21307.herokuapp.com/all-review").then(
				(res) => res.json()
			)
	);

	const { data: orders, isLoading: orderLoading } = useQuery("allOrders", () =>
		fetch("https://mighty-temple-21307.herokuapp.com/all-order").then((res) =>
			res.json()
		)
	);

	if (isLoading || reviewLoading || orderLoading) {
		return <Loading></Loading>;
	}

	return (
		<section className="my-24">
			<div className="">
				<div
					className="hero min-h-[500px] mt-12"
					style={{ backgroundImage: `url(${bgImg})` }}
				>
					<div className="hero-overlay bg-opacity-60 bg-accent"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="w-full text-white">
							<h1 className="mb-5 sm:text-4xl text-3xl font-bold">
								Business Summary
							</h1>
							<div className="mx-auto">
								<div className="grid grid-cols-1 md:grid-cols-3 rounded-lg bg-white text-black shadow">
									<div className="stat place-items-center">
										<div className="stat-title">Products</div>
										<div className="stat-value">
											{products?.length}
										</div>
									</div>

									<div className="stat place-items-center">
										<div className="stat-title">Reviews</div>
										<div className="stat-value text-secondary">
											{reviews?.length}
										</div>
									</div>

									<div className="stat place-items-center">
										<div className="stat-title">Total Orders</div>
										<div className="stat-value">{orders?.length}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BusinessSummary;
