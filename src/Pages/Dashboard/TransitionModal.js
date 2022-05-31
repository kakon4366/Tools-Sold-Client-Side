import React from "react";

const TransitionModal = ({ setTransitionModal, transitionModal }) => {
	const { transactionId, productName } = transitionModal;

	return (
		<div>
			<input
				type="checkbox"
				id="transition-show-modal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box relative">
					<label
						for="transition-show-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<h3 className="text-lg font-bold">
						Product Name: {productName}
					</h3>
					<p className="py-4">
						Transition Id:{" "}
						<span className="text-primary">{transactionId}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default TransitionModal;
