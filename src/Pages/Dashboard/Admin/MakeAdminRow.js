import React from "react";
import { toast } from "react-toastify";
import avatar from "../../../Images/avatar.jpg";

const MakeAdminRow = ({ user, index, refetch, setDeleteUser }) => {
	const { image, email, role } = user;

	const makeAdminHandler = () => {
		fetch(`https://mighty-temple-21307.herokuapp.com/user/admin/${email}`, {
			method: "PUT",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => {
				if (res.status === 403) {
					toast.error("Faild to make an admin");
				}
				return res.json();
			})
			.then((data) => {
				if (data.modifiedCount > 0) {
					refetch();
					toast.success("Successfully made an admin");
				}
			});
	};

	return (
		<tr>
			<th>{index + 1}</th>
			<td>
				<div className="avatar">
					<div className="w-24 rounded-full">
						<img src={image || avatar} alt="" />
					</div>
				</div>
			</td>
			<td>{email}</td>
			<td>
				<span className="italic">
					{role || (
						<div className="flex flex-col">
							<span>user</span>{" "}
							<button
								onClick={makeAdminHandler}
								className="btn w-[100px] btn-xs"
							>
								Make Admin
							</button>
						</div>
					)}
				</span>
			</td>
			<td>
				<label
					onClick={() => setDeleteUser(user)}
					htmlFor="user-delete-modal"
					className="btn btn-warning btn-sm"
				>
					Delete
				</label>
			</td>
		</tr>
	);
};

export default MakeAdminRow;
