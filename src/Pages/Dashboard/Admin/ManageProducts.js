import React from "react";
import useProducts from "../../../Hooks/useProducts";
import Loading from "../../Shared/Loading/Loading";
import ManageProductsRow from "./ManageProductsRow";

const ManageProducts = () => {
	const [products, isLoading] = useProducts();

	if (isLoading) {
		return <Loading></Loading>;
	}

	return (
		<div>
			<h2>Total Products: {products.length}</h2>
			<div className="overflow-x-auto ">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Srl</th>
							<th>Photo</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Available</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{products?.map((product, index) => (
							<ManageProductsRow
								product={product}
								key={product._id}
								index={index}
							></ManageProductsRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageProducts;
