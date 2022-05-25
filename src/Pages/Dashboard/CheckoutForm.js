import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ product }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState("");
	const [clientSecret, setClientSecret] = useState("");

	const { price, quantity } = product;
	const totalPrice = price * quantity;

	// useEffect(() => {
	// 	fetch("https://mighty-temple-21307.herokuapp.com/create-payment-intent", {
	// 		method: "POST",
	// 		headers: {
	// 			"content-type": "application/json",
	// 			authorization: `Bearer ${localStorage.getItem("access_token")}`,
	// 		},
	// 		body: JSON.stringify({ totalPrice }),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			if (data?.clientSecret) {
	// 				setClientSecret(data.clientSecret);
	// 			}
	// 		});
	// }, [totalPrice]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			setCardError(error.message);
		} else {
			setCardError("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement
				options={{
					style: {
						base: {
							fontSize: "16px",
							color: "#ffffff",
							"::placeholder": {
								color: "#aab7c4",
							},
						},
						invalid: {
							color: "#9e2146",
						},
					},
				}}
			/>
			<p className="text-red-500 mt-2">
				<small>{cardError && cardError}</small>
			</p>
			<button
				className="btn btn-success w-full mt-4 text-white text-lg"
				type="submit"
				disabled={!stripe}
			>
				Pay
			</button>
		</form>
	);
};

export default CheckoutForm;
