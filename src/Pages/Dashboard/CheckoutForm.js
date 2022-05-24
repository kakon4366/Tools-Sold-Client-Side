import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = () => {};

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
			{/* <p className="text-red-500 mt-2">
				<small>{cardError && cardError}</small>
			</p>
			<p className="text-green-500 mt-2">
				<small>{success && success}</small>
			</p> */}
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
