import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";
import google from "../../Images/google.png";

const SocialLogin = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

	const navigate = useNavigate();

	const [token] = useToken(user);

	useEffect(() => {
		if (token) {
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

	return (
		<div>
			{firebaseError}
			<button
				onClick={() => signInWithGoogle()}
				className={`btn btn-outline border-slate-300 flex justify-center items-center w-full ${
					loading && "loading"
				}`}
			>
				<img className="w-8 mr-3" src={google} alt="" />
				<span>Sign in With Google</span>
			</button>
		</div>
	);
};

export default SocialLogin;
