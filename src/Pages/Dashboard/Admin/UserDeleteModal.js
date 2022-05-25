import React from "react";
import { toast } from "react-toastify";

const UserDeleteModal = ({ deleteUser, setDeleteUser, refetch }) => {
	const { _id } = deleteUser;

	//delete user
	const deleteUserHandler = (id) => {
		fetch(`https://mighty-temple-21307.herokuapp.com/user/${id}`, {
			method: "DELETE",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					setDeleteUser(null);
					refetch();
					toast.success("User Delete Success!");
				}
			});
	};

	return (
		<div>
			<input
				type="checkbox"
				id="user-delete-modal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">
						Congratulations random Interner user!
					</h3>
					<p className="py-4">
						You've been selected for a chance to get one year of
						subscription to use Wikipedia for free!
					</p>
					<div className="modal-action">
						<button
							onClick={() => deleteUserHandler(_id)}
							className="btn btn-warning btn-sm"
						>
							Delete
						</button>
						<label htmlFor="user-delete-modal" className="btn btn-sm">
							Cancle
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDeleteModal;
