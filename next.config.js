/** @type {import('next').NextConfig} */
const nextConfig = {
	//   output: "export",
	//   images: {unoptimized: true}
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				port: "",
				pathname: "/a/**",
			},
		],
	},
	webpack: (config) => {
		config.externals = [...config.externals, "bcrypt"];
		return config;
	},
};

module.exports = nextConfig;
