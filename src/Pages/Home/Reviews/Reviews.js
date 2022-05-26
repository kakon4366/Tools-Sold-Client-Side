import React from "react";
import { useQuery } from "react-query";
import SectionTitle from "../../../Components/SectionTitle";
import Loading from "../../Shared/Loading/Loading";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
	const { data: reviews, isLoading } = useQuery("reviews", () =>
		fetch("http://localhost:5000/all-review").then((res) => res.json())
	);

	if (isLoading) {
		return <Loading></Loading>;
	}

	console.log(reviews.length);

	return (
		<section className="my-12">
			<div className="container mx-auto">
				<SectionTitle>Reviews</SectionTitle>
				<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-y-20 gap-x-8">
					{reviews.map((review) => (
						<ReviewCard review={review} key={review._id}></ReviewCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default Reviews;
