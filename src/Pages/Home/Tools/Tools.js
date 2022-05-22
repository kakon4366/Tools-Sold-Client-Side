import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import tool from "../../../Images/tool.jpg";

const Tools = () => {
	return (
		<section className="my-24">
			<div className="container mx-auto">
				<SectionTitle>Tools</SectionTitle>
				<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
					{/* single car */}
					<div class="card bg-base-100 shadow-xl">
						<figure>
							<img src={tool} alt="Shoes" className="w-full" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card bg-base-100 shadow-xl">
						<figure>
							<img src={tool} alt="Shoes" className="w-full" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card bg-base-100 shadow-xl">
						<figure>
							<img src={tool} alt="Shoes" className="w-full" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card bg-base-100 shadow-xl">
						<figure>
							<img src={tool} alt="Shoes" className="w-full" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card bg-base-100 shadow-xl">
						<figure>
							<img src={tool} alt="Shoes" className="w-full" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card bg-base-100 shadow-xl">
						<figure>
							<img src={tool} alt="Shoes" className="w-full" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tools;
