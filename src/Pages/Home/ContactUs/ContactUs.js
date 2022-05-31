import React from "react";
import SectionTitle from "../../../Components/SectionTitle";

const ContactUs = () => {
	return (
		<section className="my-24">
			<div className="container mx-auto px-2">
				<SectionTitle>Contact Us</SectionTitle>
				<form action="" className="w-full md:w-3/4 lg:w-1/2 mx-auto">
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text">Full Name</span>
						</label>
						<input
							type="text"
							placeholder="Full Name"
							className="input input-bordered "
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text">Email Address</span>
						</label>
						<input
							type="email"
							placeholder="Email Address"
							className="input input-bordered "
						/>
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text">Email Address</span>
						</label>
						<textarea
							className=" border p-3 "
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
