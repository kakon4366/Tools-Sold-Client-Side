import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const ReviewCard = ({ product, refetch }) => {
	const [user, loading] = useAuthState(auth);
	const [rating, setRating] = useState(0);
	const {
		_id,
		productName,
		rating: ratingCount,
		price,
		img,
		description,
	} = product;

	if (loading) {
		return <Loading></Loading>;
	}

	console.log(rating);

	const handleReview = (e) => {
		e.preventDefault();
		const name = user.displayName;
		const message = e.target.message.value;

		const review = { name, message, rating };

		fetch(`http://localhost:5000/review/${_id}`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
			body: JSON.stringify(review),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					toast.success("Review Success");
					refetch();
				}
			});
	};

	return (
		<div class="card card-compact w-96 bg-base-100 shadow-xl">
			<figure>
				<img src={img} alt={productName} />
			</figure>
			<div class="card-body">
				<h2 class="card-title">{productName}</h2>
				<p>{description}</p>
				<h3>Price ${price}</h3>
				<p className="text-secondary">
					{" "}
					{ratingCount ? `Rating: ${ratingCount} Star` : ""}
				</p>
				<hr />
				<h2 className="text-2xl font-semibold">{user.displayName}</h2>

				<form onSubmit={handleReview} action="">
					<textarea
						className="input input-bordered"
						placeholder="Your Message"
						name="message"
						cols="30"
						rows="5"
					></textarea>
					<div class="rating">
						<input
							value="1"
							onChange={(e) => setRating(e.target.value)}
							type="radio"
							name="rating-2"
							class="mask mask-star-2 bg-orange-400"
						/>
						<input
							value="2"
							onChange={(e) => setRating(e.target.value)}
							type="radio"
							name="rating-2"
							class="mask mask-star-2 bg-orange-400"
							checked
						/>
						<input
							value="3"
							onChange={(e) => setRating(e.target.value)}
							type="radio"
							name="rating-2"
							class="mask mask-star-2 bg-orange-400"
						/>
						<input
							value="4"
							onChange={(e) => setRating(e.target.value)}
							type="radio"
							name="rating-2"
							class="mask mask-star-2 bg-orange-400"
						/>
						<input
							value="5"
							onChange={(e) => setRating(e.target.value)}
							type="radio"
							name="rating-2"
							class="mask mask-star-2 bg-orange-400"
						/>
					</div>
					<div class="card-actions justify-end">
						<span className="text-secondary">
							{ratingCount && "Your ar already review this product"}
						</span>
						<button
							disabled={ratingCount ? true : false}
							type="submit"
							class="btn btn-primary"
						>
							Review
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ReviewCard;
