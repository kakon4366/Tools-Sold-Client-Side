import React from "react";
import { useQuery } from "react-query";
import Product from "../../../Components/Product";
import SectionTitle from "../../../Components/SectionTitle";
import tool from "../../../Images/tool.jpg";
import Loading from "../../Shared/Loading/Loading";

const Tools = () => {
	const { data: products, isLoading } = useQuery("products", () =>
		fetch("products.json").then((res) => res.json())
	);

	if (isLoading) {
		return <Loading></Loading>;
	}

	return (
		<section className="my-24">
			<div className="container mx-auto">
				<SectionTitle>Tools</SectionTitle>

				<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-2">
					{products.map((product) => (
						<Product key={product._id} product={product}></Product>
					))}
				</div>
			</div>
		</section>
	);
};

export default Tools;
