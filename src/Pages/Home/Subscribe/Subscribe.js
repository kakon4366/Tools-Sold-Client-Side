import React from "react";

const Subscribe = () => {
	const handleSubscribe = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		console.log(email);
	};

	return (
		<section className="bg-secondary py-12">
			<div className="container mx-auto px-2">
				<div>
					<form
						onSubmit={handleSubscribe}
						action=""
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
