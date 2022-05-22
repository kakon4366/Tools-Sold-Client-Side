import React from "react";
import google from "../../Images/google.png";

const SocialLogin = () => {
	return (
		<button className="btn btn-outline border-slate-300 flex justify-center items-center w-full ">
			<img className="w-8 mr-3" src={google} alt="" />
			<span>Sign in With Google</span>
		</button>
	);
};

export default SocialLogin;
