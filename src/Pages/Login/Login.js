import React from "react";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data, e) => {
		e.preventDefault();
		console.log(data);
	};

	return (
		<section className="my-12">
			<div className="container mx-auto">
				<div className="flex justify-center items-center">
					<div className="w-[400px]">
						<form
							onSubmit={handleSubmit(onSubmit)}
							action=""
							className="border bg-slate-100 p-5 rounded-md shadow-sm"
						>
							<h2 className="text-2xl text-center">Login</h2>

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
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="Password"
									className="input input-bordered w-full"
									{...register("password", {
										required: {
											value: true,
											message: "Password is required.",
										},
										minLength: {
											value: 6,
											message: "Password will be character and more",
										},
									})}
								/>
								<label className="label">
									{errors.password?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.password.message}
										</span>
									)}
									{errors.password?.type === "minLength" && (
										<span className="label-text-alt text-red-500">
											{errors.password.message}
										</span>
									)}
								</label>
							</div>

							<input
								className="btn btn-primary w-full mt-2"
								type="submit"
								value="Login"
							/>
						</form>
						<div className="divider">or</div>
						<SocialLogin></SocialLogin>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
