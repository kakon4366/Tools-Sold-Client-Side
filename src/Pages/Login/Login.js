import React from "react";
import SocialLogin from "./SocialLogin";

const Login = () => {
	return (
		<section className="my-12">
			<div className="container mx-auto">
				<div className="flex justify-center items-center">
					<div className="w-[400px]">
						<form
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
								/>
								<label className="label">
									<span className="label-text-alt">Alt label</span>
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
								/>
								<label className="label">
									<span className="label-text-alt">Alt label</span>
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
