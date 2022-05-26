import React from "react";
import avatar from "../../../Images/avatar.jpg";

const ReviewCard = ({ review }) => {
	const { name, message, rating } = review;
	return (
		<div className="bg-slate-200 shadow-lg relative">
			<div className="avatar absolute left-0 -top-12">
				<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
					<img src={avatar} alt="" />
				</div>
			</div>
			<div className="card-body mt-6">
				<h2 className="card-title">{name}</h2>
				<p>{message}</p>
				<p className="text-yellow-700">Rating: {rating} Start</p>
			</div>
		</div>
	);
};

export default ReviewCard;
