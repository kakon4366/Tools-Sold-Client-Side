import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import ManageAllOrdersRow from "./ManageAllOrdersRow";

const ManageAllOrders = () => {
	const {
		data: products,
		isLoading,
		refetch,
	} = useQuery("orderedProducts", () =>
		fetch(`https://mighty-temple-21307.herokuapp.com/all-order`).then((res) =>
			res.json()
		)
	);

	if (isLoading) {
		return <Loading></Loading>;
	}

	return (
		<div>
			<h2>Manage All Orders</h2>
			<div className="overflow-x-auto ">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Srl</th>
							<th>Photo</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Amount</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{products?.map((product, index) => (
							<ManageAllOrdersRow
								product={product}
								key={product._id}
								index={index}
								refetch={refetch}
							></ManageAllOrdersRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageAllOrders;
