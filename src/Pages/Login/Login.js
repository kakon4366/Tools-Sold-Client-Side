import React, { useEffect } from "react";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";

const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const [token] = useToken(user);

	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			toast.success("Login Success!");
			navigate("/home");
		}
	}, [token, navigate]);

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
		signInWithEmailAndPassword(data.email, data.password);
		e.target.reset();
	};

	return (
		<section className="my-12">
			<div className="container mx-auto">
				<div className="flex justify-center items-center">
					<div className="w-[400px]">
						<form
							onSubmit={handleSubmit(onSubmit)}
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
											message:
												"Password will be 6 character and more",
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
								{firebaseError}
							</div>

							<button
								className={`btn btn-primary w-full mt-2 ${
									loading && "loading"
								}`}
								type="submit"
							>
								Login
							</button>
							<p className="flex justify-between mt-2">
								<small>
									Not an account?{" "}
									<Link className="text-primary" to="/register">
										Register
									</Link>
								</small>
								<small className="text-secondary">
									<button onClick={() => navigate("/password-reset")}>
										Forgot Password
									</button>
								</small>
							</p>
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
