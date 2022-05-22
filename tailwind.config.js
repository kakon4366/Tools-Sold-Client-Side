module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#242F9B",
					secondary: "#9BA3EB",
					accent: "#4D4C7D",
					neutral: "#363062",
					"base-100": "#ffffff",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
