/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		// domains: [
		// 	// NextJS <Image> component needs to whitelist domains for src={}
		// 	"lh3.googleusercontent.com",
		// 	"pbs.twimg.com",
		// 	"images.unsplash.com",
		// 	"logos-world.net",
		// 	"unsplash.com",
		// 	"anana-landing.vercel.app",
		// ],
		remotePatterns: [
			// NextJS <Image> component needs to whitelist domains for src={}
			{
				protocol: "https",
				hostname: "images.unsplash.com/*",
			},
			{
				protocol: "https",
				hostname: "anana-landing.vercel.app/*",
			},
			{
				protocol: "http",
				hostname: "localhost:3000/*",
			},
		],
	},
};

module.exports = nextConfig;
