import React from "react";

const DeleteModal = ({ deleteModal, refetch, setDeleteModal }) => {
	const { _id } = deleteModal;

	const handleDelete = (id) => {
		const url = `https://mighty-temple-21307.herokuapp.com/order/${id}`;
		fetch(url, {
			method: "DELETE",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					setDeleteModal(null);
					refetch();
				}
			});
	};

	return (
		<div>
			<input type="checkbox" id="deleteModal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">
						Are you sure cancle this order!
					</h3>
					<div className="modal-action">
						<button
							onClick={() => handleDelete(_id)}
							className="btn btn-secondary"
						>
							Yes
						</button>
						<label htmlFor="deleteModal" className="btn">
							Close
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;
