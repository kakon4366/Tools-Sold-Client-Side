import React from "react";
import SectionTitle from "../../Components/SectionTitle";

const Blog = () => {
	return (
		<section className="my-24">
			<div className="container mx-auto">
				<SectionTitle>Blog</SectionTitle>
				<div>
					<div className="p-4 bg-blue-100">
						<h3 className="text-xl mb-2 font-semibold italic underline">
							1. How will you improve the performance of a React
							Application?
						</h3>
						<p>
							<span className="font-semibold ">Ans: </span>
							If you want to get a good performance in React application,
							you have to arrange the codes neatly, do the component form
							without duplicating the code, code so that you have to
							optimize React application in many more ways including
							preventing re-render.
						</p>
					</div>
					<div className="p-4 mt-8 bg-blue-100">
						<h3 className="text-xl mb-2 font-semibold italic underline">
							2. What are the different ways to manage a state in a React
							application?
						</h3>
						<p>
							<span className="font-semibold ">Ans: </span>
							There are four main methods of managing a state in React.
							They are - 1. Local state, II. Global state, 3. Server
							state, 4. URL state
						</p>
					</div>
					<div className="p-4 mt-8 bg-blue-100">
						<h3 className="text-xl mb-2 font-semibold italic underline">
							3. How does prototypical inheritance work?
						</h3>
						<p>
							<span className="font-semibold ">Ans: </span>
							Each object has an intrinsic property that is a prototype.
							Prototypal Inheritance is a feature of JavaScript that is
							capable of adding properties from one object to another.
						</p>
					</div>
					<div className="p-4 mt-8 bg-blue-100">
						<h3 className="text-xl mb-2 font-semibold italic underline">
							4. Why you do not set the state directly in React. For
							example, if you have const [products, setProducts] =
							useState([]). Why you do not set products = [...] instead,
							you use the setProducts?
						</h3>
						<p>
							<span className="font-semibold ">Ans: </span>
							The main condition of React is to use its own state without
							using browser DOM. By doing so, the performance of React
							application is much better. But we do not use "" products =
							[...] "" but use "" setProducts "" which reactor's
							performance is good and reactor's status is auto-rendered.
							However, the React application can do this very easily with
							the help of the virtual dome.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
