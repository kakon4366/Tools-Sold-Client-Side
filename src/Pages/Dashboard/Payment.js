import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
	"pk_test_51L2yd3B8DRWv2NRKalSDARWQAs9VqLyFVjVS3mf3ZiQzxrQMsz0FCrzbCYoFj30Z2lnx1u6jDaVahNMbPkWF5AWp00hVS0wMy9"
);

const Payment = () => {
	const { productId } = useParams();

	const url = `https://mighty-temple-21307.herokuapp.com/payment-product/${productId}`;

	const { data: product, isLoading } = useQuery(
		["aymentProduct", productId],
		() =>
			fetch(url, {
				method: "GET",
				headers: {
					authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
			}).then((res) => res.json())
	);

	if (isLoading) {
		return <Loading></Loading>;
	}

	const { productName, price, quantity, img, description } = product;

	return (
		<section className="py-28">
			<div className="container mx-auto">
				<div className="flex justify-center items-center">
					<div className="card w-96 bg-accent shadow-xl image-full">
						<figure>
							<img
								className="h-[200px] w-full"
								src={img}
								alt={productName}
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">{productName}</h2>
							<p>{description}</p>
							<h4 className="text-lg font-semibold">Price: ${price}</h4>
							<p className="italic">Quantity: {quantity}</p>
							<h3 className="font-semibold text-xl">
								Pay Amout: {price * quantity}
							</h3>
							<hr />
							<h2 className="text-2xl font-semibold mb-4">Payment</h2>
							<Elements stripe={stripePromise}>
								<CheckoutForm product={product} />
							</Elements>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Payment;
