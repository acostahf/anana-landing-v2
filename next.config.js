/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			// NextJS <Image> component needs to whitelist domains for src={}
			"lh3.googleusercontent.com",
			"pbs.twimg.com",
			"images.unsplash.com",
			"logos-world.net",
			"unsplash.com",
		],
		remotePatterns: [
			// NextJS <Image> component needs to whitelist domains for src={}
			"https://lh3.googleusercontent.com/*",
			"https://pbs.twimg.com/*",
			"https://images.unsplash.com/*",
			"https://logos-world.net/*",
			"https://unsplash.com/*",
			"https://anana-landing.vercel.app/*",
		],
	},
};

module.exports = nextConfig;
