module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#242F9B",
					secondary: "#9BA3EB",
					accent: "#363062",
					neutral: "#ffffff",
					"base-100": "#ffffff",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
