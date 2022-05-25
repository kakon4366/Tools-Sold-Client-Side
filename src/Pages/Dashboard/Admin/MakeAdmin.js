import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import MakeAdminRow from "./MakeAdminRow";
import UserDeleteModal from "./UserDeleteModal";

const MakeAdmin = () => {
	const [deleteUser, setDeleteUser] = useState(null);
	const {
		data: users,
		isLoading,
		refetch,
	} = useQuery("users", () =>
		fetch("http://localhost:5000/user", {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		}).then((res) => res.json())
	);

	if (isLoading) {
		return <Loading></Loading>;
	}

	return (
		<div>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Srl</th>
							<th>Photo</th>
							<th>Email</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users?.map((user, index) => (
							<MakeAdminRow
								index={index}
								user={user}
								key={user._id}
								refetch={refetch}
								setDeleteUser={setDeleteUser}
							></MakeAdminRow>
						))}
					</tbody>
				</table>
			</div>
			{deleteUser && (
				<UserDeleteModal
					deleteUser={deleteUser}
					setDeleteUser={setDeleteUser}
					refetch={refetch}
				></UserDeleteModal>
			)}
		</div>
	);
};

export default MakeAdmin;
