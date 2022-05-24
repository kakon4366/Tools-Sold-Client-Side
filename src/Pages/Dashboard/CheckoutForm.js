import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { async } from "@firebase/util";

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card === null) {
			return;
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
