module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#009CDD",
					secondary: "#C22C16",
					accent: "#212121",
					neutral: "#212121",
					"base-100": "#ffffff",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
