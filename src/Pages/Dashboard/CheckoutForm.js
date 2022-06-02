import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const CheckoutForm = ({ product }) => {
	const [user, loading] = useAuthState(auth);
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState("");
	const [processing, setProcessing] = useState(false);
	const [success, setSuccess] = useState("");
	const [transition, setTransition] = useState("");
	const [clientSecret, setClientSecret] = useState("");

	const { _id, price, quantity } = product;
	const totalPrice = price * quantity;

	useEffect(() => {
		fetch("https://mighty-temple-21307.herokuapp.com/create-payment-intent", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
			body: JSON.stringify({ totalPrice }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Client Secret Date..", data);
				if (data?.clientSecret) {
					setClientSecret(data.clientSecret);
				}
			});
	}, [totalPrice]);

	//user loading
	if (loading) {
		return <Loading></Loading>;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const name = user?.displayName;
		const email = user?.email;

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

		// confirm card payment
		const { paymentIntent, error: intentError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: name,
						email: email,
					},
				},
			});

		if (intentError) {
			setCardError(intentError?.message);
			setProcessing(false);
		} else {
			setCardError("");
			console.log("paument intent", paymentIntent);
			setTransition(paymentIntent.id);
			setSuccess("Congrats! Your payment is completed.");

			const payment = {
				payOrdred: _id,
				transactionId: paymentIntent.id,
			};

			fetch(`https://mighty-temple-21307.herokuapp.com/pay-product/${_id}`, {
				method: "PATCH",
				headers: {
					"content-type": "application/json",
					authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
				body: JSON.stringify(payment),
			})
				.then((res) => res.json())
				.then((data) => {
					setProcessing(false);
					console.log(data);
				});
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
			<p className="text-green-500 mt-2">
				<small>{success && success}</small>
			</p>
			<button
				className="btn btn-success w-full mt-4 text-white text-lg"
				type="submit"
				disabled={!stripe || !clientSecret}
			>
				{processing ? "Processing..." : "Pay"}
			</button>
		</form>
	);
};

export default CheckoutForm;
