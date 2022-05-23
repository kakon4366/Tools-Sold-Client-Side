import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const PasswordReset = () => {
	const [sendPasswordResetEmail, sending, error] =
		useSendPasswordResetEmail(auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	let firebaseError;
	if (error) {
		firebaseError = (
			<p className="text-red-500">
				<small>{error.message}</small>
			</p>
		);
	}

	const onSubmit = (data, e) => {
		e.preventDefault();
		sendPasswordResetEmail(data.email);
		e.target.reset();
	};

	return (
		<div className="container mx-auto">
			<div className="flex justify-center items-center h-[500px]">
				<div className="w-[400px]">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="border bg-slate-100 p-5 rounded-md shadow-sm"
					>
						<h2 className="text-2xl text-center">Password Reset</h2>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text">Email Address</span>
							</label>
							<input
								type="email"
								placeholder="Email Address"
								className="input input-bordered w-full"
								{...register("email", {
									required: {
										value: true,
										message: "Email Address is required.",
									},
									pattern: {
										value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
										message: "Provide a valid email",
									},
								})}
							/>
							<label className="label">
								{errors.email?.type === "required" && (
									<span className="label-text-alt text-red-500">
										{errors.email.message}
									</span>
								)}
								{errors.email?.type === "pattern" && (
									<span className="label-text-alt text-red-500">
										{errors.email.message}
									</span>
								)}
							</label>
							{firebaseError}
						</div>
						<button
							type="submit"
							className={`btn btn-primary w-full ${
								sending && "loading"
							}`}
						>
							{sending ? "Sending..." : "Send Email"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PasswordReset;
