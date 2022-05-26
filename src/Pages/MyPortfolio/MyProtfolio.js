import React from "react";
import image from "../../Images/kakon.jpg";
import project1 from "../../Images/project-1.png";
import project2 from "../../Images/project2.png";
import project3 from "../../Images/project3.png";

const MyProtfolio = () => {
	return (
		<section>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img src={image} alt="" />
					<div>
						<p className="text-xl mb-4">Hey,</p>
						<h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold">
							I'm Web Developer
						</h1>

						<p className="py-6">
							My Name is <q>Kakon Barman</q>. I have been learning
							various functions of web development for 1 year. I will do
							web development as a profession. Because I'm attracted to
							web development. Which is why I always like to deal with
							new types of challenges. I always stick to my goal.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
			<div className="container mx-auto my-24 px-2">
				<h2 className="text-3xl text-center font-semibold underline">
					About My Self
				</h2>
				<div className="mt-4">
					<div className="lg:w-1/2 w-full mx-auto ">
						<h3 className="text-2xl font-semibold">Kakon Barman</h3>
						<h4 className="text-md italic">Web Developer</h4>
						<p className="text-md mt-2">
							Email: kakonbarman4366@gmail.com
						</p>
						<div className="mt-8">
							<h4 className="text-3xl font-semibold">
								Educational Background
							</h4>
							<hr className="mb-2" />
							<div className="flex justify-between max-w-lg">
								<p className="w-[40%]">Institute Name:</p>
								<p className="w-[60%]">
									Hatibandha Alimuddin Degree College.
								</p>
							</div>
							<div className="flex justify-between max-w-lg">
								<p className="w-[40%]">Board</p>
								<p className="w-[60%]">National University.</p>
							</div>
							<div className="flex justify-between max-w-lg">
								<p className="w-[40%]">Subject</p>
								<p className="w-[60%]">English</p>
							</div>
							<div className="flex justify-between max-w-lg">
								<p className="w-[40%]">Session</p>
								<p className="w-[60%]">2021-22</p>
							</div>
							<div className="flex justify-between max-w-lg">
								<p className="w-[40%]">Duration</p>
								<p className="w-[60%]">4 Years</p>
							</div>
						</div>
						<div className="mt-8">
							<h4 className="text-3xl font-semibold ">Skills</h4>
							<hr />
							<div>
								<div className="mt-2">
									<h2>HTML</h2>
									<progress
										className="progress progress-primary "
										value="94"
										max="100"
									></progress>
								</div>
								<div className="mt-2">
									<h2>CSS3</h2>
									<progress
										className="progress progress-primary "
										value="88"
										max="100"
									></progress>
								</div>
								<div className="mt-2">
									<h2>Boostrap</h2>
									<progress
										className="progress progress-primary "
										value="90"
										max="100"
									></progress>
								</div>
								<div className="mt-2">
									<h2>Tailwind</h2>
									<progress
										className="progress progress-primary "
										value="85"
										max="100"
									></progress>
								</div>
								<div className="mt-2">
									<h2>Javascript</h2>
									<progress
										className="progress progress-primary "
										value="78"
										max="100"
									></progress>
								</div>
								<div className="mt-2">
									<h2>React.js</h2>
									<progress
										className="progress progress-primary "
										value="75"
										max="100"
									></progress>
								</div>
								<div className="mt-2">
									<h2>Node.js</h2>
									<progress
										className="progress progress-primary "
										value="65"
										max="100"
									></progress>
								</div>
								<div className="mt-2">
									<h2>MongoDB</h2>
									<progress
										className="progress progress-primary "
										value="58"
										max="100"
									></progress>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-12">
						<h4 className="text-3xl font-semibold ">My OWN Projects</h4>
						<hr />

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div className="mt-8">
								<h2 className="text-2xl lg:text-4xl">
									1. Hotel Auth Firebase{" "}
									<a
										className="text-primary text-xl"
										href="https://hotel-auth-firebase.web.app/"
										target="_blank"
									>
										(Live Link)
									</a>
								</h2>
								<div className="mt-2 w-full h-[500px] overflow-scroll p-2 border-accent border-2">
									<img src={project1} alt="" />
								</div>
							</div>

							<div className="mt-8">
								<h2 className="text-2xl lg:text-4xl">
									2. Warehouse Management
									<a
										className="text-primary text-xl"
										href="https://warehouse-management-b4280.web.app/"
										target="_blank"
									>
										(Live Link)
									</a>
								</h2>
								<div className="mt-2 w-full h-[500px] overflow-scroll p-2 border-accent border-2">
									<img src={project2} alt="" />
								</div>
							</div>

							<div className="mt-8">
								<h2 className="text-2xl lg:text-4xl">
									3. Vermont Convention Center
									<a
										className="text-primary text-xl"
										href="https://vermont-convention-center.netlify.app/"
										target="_blank"
									>
										(Live Link)
									</a>
								</h2>
								<div className="mt-2 w-full h-[500px] overflow-scroll p-2 border-accent border-2">
									<img src={project3} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MyProtfolio;
