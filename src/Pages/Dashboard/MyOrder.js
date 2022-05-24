import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import DeleteModal from "./DeleteModal";
import OrderRow from "./OrderRow";

const MyOrder = () => {
	const [deleteModal, setDeleteModal] = useState(null);
	const [user, loading] = useAuthState(auth);

	const email = user?.email;

	const {
		data: products,
		isLoading,
		refetch,
	} = useQuery("orderedProducts", () =>
		fetch(`http://localhost:5000/ordered-product/${email}`).then((res) =>
			res.json()
		)
	);

	if (isLoading || loading) {
		return <Loading></Loading>;
	}

	return (
		<div>
			<h2>Total Order: {products.length}</h2>
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
						{products.map((product, index) => (
							<OrderRow
								key={product._id}
								product={product}
								index={index}
								setDeleteModal={setDeleteModal}
							></OrderRow>
						))}
					</tbody>
				</table>
			</div>
			{deleteModal && (
				<DeleteModal
					deleteModal={deleteModal}
					refetch={refetch}
					setDeleteModal={setDeleteModal}
				></DeleteModal>
			)}
		</div>
	);
};

export default MyOrder;
