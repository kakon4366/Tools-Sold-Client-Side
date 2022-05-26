import React from "react";
import SectionTitle from "../../../Components/SectionTitle";

const ContactUs = () => {
	return (
		<section className="my-24">
			<div className="container mx-auto px-2">
				<SectionTitle>Contact Us</SectionTitle>
				<form action="" className="w-full md:w-3/4 lg:w-1/2 mx-auto">
					<div class="form-control w-full">
						<label class="label">
							<span class="label-text">Full Name</span>
						</label>
						<input
							type="text"
							placeholder="Full Name"
							class="input input-bordered "
						/>
					</div>
					<div class="form-control w-full">
						<label class="label">
							<span class="label-text">Email Address</span>
						</label>
						<input
							type="email"
							placeholder="Email Address"
							class="input input-bordered "
						/>
					</div>
					<div class="form-control w-full">
						<label class="label">
							<span class="label-text">Email Address</span>
						</label>
						<textarea
							class=" border p-3 "
							placeholder="Your Message"
							name=""
							id=""
							cols="30"
							rows="5"
						></textarea>
					</div>
					<input
						className="btn btn-primary mt-4"
						type="submit"
						value="Submit"
					/>
				</form>
			</div>
		</section>
	);
};

export default ContactUs;
