import React from "react";

const Subscribe = () => {
	return (
		<section className="bg-secondary py-12">
			<div className="container mx-auto px-2">
				<div className="text-center md:flex justify-center items-center">
					<input
						type="email"
						placeholder="Your Email Address"
						class="input input-bordered w-full md:max-w-sm"
					/>
					<button className="btn mt-4 md:mt-0 btn-accent">
						Subscribe
					</button>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
