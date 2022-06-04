import React from "react";
import { toast } from "react-toastify";

const Subscribe = () => {
	const handleSubscribe = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		console.log(email);

		fetch("http://localhost:5000/subscribe", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ email: email }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.success) {
					toast.success(data.message);
				} else {
					toast.error(data.message);
				}
			});
	};

	return (
		<section className="bg-secondary py-12">
			<div className="container mx-auto px-2">
				<div>
					<form
						onSubmit={handleSubscribe}
						className="text-center md:flex justify-center items-center"
					>
						<input
							type="email"
							name="email"
							placeholder="Your Email Address"
							className="input input-bordered w-full md:max-w-sm"
						/>
						<button type="submit" className="btn mt-4 md:mt-0 btn-accent">
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
