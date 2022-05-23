import React, { useEffect, useState } from "react";
import SocialLogin from "../Login/SocialLogin";
import { useForm } from "react-hook-form";
import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
	const [checked, setChecked] = useState(false);
	const [passwordError, setPasswordError] = useState("");
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
	const [updateProfile, updating, updateError] = useUpdateProfile(auth);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			toast.success("Register success!");
			navigate("/home");
		}
	}, [navigate, user]);

	let firebaseError;
	if (error || updateError) {
		firebaseError = (
			<p className="text-red-500">
				<small>{error.message}</small>
			</p>
		);
	}

	const onSubmit = async (data, e) => {
		e.preventDefault();
		const password = data.password;
		const confirmPassword = data.confirmPassword;

		if (password !== confirmPassword) {
			return setPasswordError("Confirm password must be same to password");
		}
		setPasswordError("");

		await createUserWithEmailAndPassword(data.email, data.password);
		await updateProfile({ displayName: data.name });

		e.target.reset();
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
							<h2 className="text-2xl text-center">Register</h2>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									placeholder="Name"
									className="input input-bordered w-full"
									{...register("name", {
										required: {
											value: true,
											message: "Name is required.",
										},
									})}
								/>
								<label className="label">
									{errors.name?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.name.message}
										</span>
									)}
								</label>
							</div>
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
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Confirm Password</span>
								</label>
								<input
									type="password"
									placeholder="Comfirm Password"
									className="input input-bordered w-full"
									{...register("confirmPassword", {
										required: {
											value: true,
											message: "Confirm Password is required.",
										},
										minLength: {
											value: 6,
											message:
												"Password will be 6 character and more",
										},
									})}
								/>
								<label className="label">
									{errors.confirmPassword?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.confirmPassword.message}
										</span>
									)}
									{errors.confirmPassword?.type === "minLength" && (
										<span className="label-text-alt text-red-500">
											{errors.confirmPassword.message}
										</span>
									)}
								</label>
								{passwordError && (
									<p className="label-text-alt mb-2 text-red-500">
										{passwordError}
									</p>
								)}
								{firebaseError}
							</div>
							{/* trams and condition */}
							<div className="form-control">
								<label className=" flex items-center cursor-pointer">
									<input
										value={checked}
										onChange={(e) => setChecked(e.target.checked)}
										type="checkbox"
										className="checkbox checkbox-sm checkbox-primary mr-2"
									/>
									<span className="label-text text-left">
										Accept trams and condition?
									</span>
								</label>
							</div>

							<button
								disabled={checked ? false : true}
								className={`btn btn-primary w-full mt-2 ${
									(loading || updating) && "loading"
								}`}
								type="submit"
							>
								Register
							</button>
							<p className="text-sm mt-2">
								Already have an account?{" "}
								<Link className="text-primary" to="/login">
									Login
								</Link>
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

export default Register;
