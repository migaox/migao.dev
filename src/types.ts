interface Site {
	title: string; // website title
	url: string;
	author: string;
	description: string; // website description info
	tagline?: string; // website tagline
	logo?: Logo; // website logo image
	favicon?: string;
	social?: Link[]; // social media accounts
	friends?: Friend[];
}

interface ThemedLogo {
	dark: string;
	light: string;
}

interface Logo {
	src: string | ThemedLogo;
	alt?: string;
}

interface Link {
	name: string;
	url: string;
	icon?: string;
}

export enum FaviconType {
	ico = "image/x-icon",
	gif = "image/gif",
	jpeg = "image/jpeg",
	jpg = "image/jpeg",
	png = "image/png",
	svg = "image/svg+xml",
}

interface Friend {
	name: string;
	url: string;
	bio: string;
	avatar: string;
	desc: string;
}

export type { Site, Link };
