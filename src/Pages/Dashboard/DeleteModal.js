import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({ deleteModal, refetch, setDeleteModal }) => {
	const { _id } = deleteModal;

	const handleDelete = (id) => {
		const url = `http://localhost:5000/order/${id}`;
		fetch(url, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					console.log(data);
					toast.success("Delete Success!");
					setDeleteModal(null);
					refetch();
				}
			});
	};

	return (
		<div>
			<input type="checkbox" id="deleteModal" class="modal-toggle" />
			<div class="modal">
				<div class="modal-box">
					<h3 class="font-bold text-lg">
						Congratulations random Interner user!
					</h3>
					<p class="py-4">
						You've been selected for a chance to get one year of
						subscription to use Wikipedia for free!
					</p>
					<div class="modal-action">
						<button
							onClick={() => handleDelete(_id)}
							className="btn btn-secondary"
						>
							Delete
						</button>
						<label for="deleteModal" class="btn">
							Cancle
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;
