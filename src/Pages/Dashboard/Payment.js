import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
	"pk_test_51L13xmSJyDRTPVy9GKERvIN1lz4K2IXJR0xUqdIQXeN9ZUOKrOx6bWapcDIHhEje2KkpUTqad0aow5YGbOjzKAeN00AooU1WAP"
);

const Payment = () => {
	const { productId } = useParams();

	const url = `http://localhost:5000/payment-product/${productId}`;

	const { data: product, isLoading } = useQuery(
		["aymentProduct", productId],
		() => fetch(url).then((res) => res.json())
	);

	if (isLoading) {
		return <Loading></Loading>;
	}

	const { productName, price, quantity, img, description } = product;

	console.log(product);

	return (
		<section className="py-28">
			<div className="container mx-auto">
				<div className="flex justify-center items-center">
					<div class="card w-96 bg-accent shadow-xl image-full">
						<figure>
							<img
								className="h-[200px] w-full"
								src={img}
								alt={productName}
							/>
						</figure>
						<div class="card-body">
							<h2 class="card-title">{productName}</h2>
							<p>{description}</p>
							<h4 className="text-lg font-semibold">Price: ${price}</h4>
							<p className="italic">Quantity: {quantity}</p>
							<h3 className="font-semibold text-xl">
								Pay Amout: {price * quantity}
							</h3>
							<hr />
							<h2 className="text-2xl font-semibold mb-4">Payment</h2>
							<Elements stripe={stripePromise}>
								<CheckoutForm />
							</Elements>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Payment;
