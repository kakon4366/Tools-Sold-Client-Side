import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import bgImg from "../../../Images/banner/tools-3.jpg";

const BusinessSummary = () => {
	return (
		<section className="my-24">
			<div className="">
				<SectionTitle>Business Summary</SectionTitle>

				<div
					className="hero min-h-[500px] mt-12"
					style={{ backgroundImage: `url(${bgImg})` }}
				>
					<div className="hero-overlay bg-opacity-60 bg-accent"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="md:w-3/4 w-sull text-white">
							<h1 className="mb-5 sm:text-5xl text-3xl font-bold">
								What is our Business?
							</h1>
							<p className="mb-5 text-slate-300">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dolorem nostrum, porro possimus obcaecati quam
								dignissimos nihil odit ipsa laboriosam ratione corporis?
								Porro laborum laudantium facilis exercitationem dicta,
								perspiciatis fugit sunt fugiat beatae deserunt quisquam
								aliquam ab magni excepturi quia corporis dolore ipsum
								facere ipsa incidunt accusamus pariatur molestias
								blanditiis illo! Doloremque aperiam eius, maxime alias
								ea adipisci voluptas laborum eos cupiditate sit quae
								saepe. Accusantium maiores ex rem quibusdam saepe, natus
								quaerat sit illum itaque veritatis officiis aut sed at
								est totam possimus doloribus nisi voluptatem cupiditate
								dolorum sunt autem ipsa quam. Quod ipsa voluptas
								explicabo dolorum distinctio! Quam, obcaecati.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BusinessSummary;
