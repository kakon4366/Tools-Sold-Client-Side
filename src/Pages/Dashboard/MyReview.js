import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import ReviewCard from "./ReviewCard";

const MyReview = () => {
	const [user, loading] = useAuthState(auth);

	const email = user?.email;

	const {
		data: products,
		isLoading,
		refetch,
	} = useQuery("orderedProducts", () =>
		fetch(
			`https://mighty-temple-21307.herokuapp.com/ordered-product/${email}`
		).then((res) => res.json())
	);

	if (isLoading || loading) {
		return <Loading></Loading>;
	}

	console.log(products);

	return (
		<div>
			<h2>Review</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{products.map((product) => (
					<ReviewCard
						refetch={refetch}
						product={product}
						key={product._id}
					></ReviewCard>
				))}
			</div>
		</div>
	);
};

export default MyReview;
