import type { Site, Link } from "@types";

const SITE: Site = {
	title: "米糕日记",
	url: "https://migao.dev",
	author: "MiGao",
	description:
		"这里是米糕的个人网站，分享自己所见所闻、所思所想，希望你能在这里找到有用或有趣的东西。",
	favicon: "/favicon.svg",
};

const MENUS: Link[] = [
	{ name: "Posts", url: "/posts" },
	// { name: 'Series', url: '/series' },
	// { name: 'Friends', url: '/friends' },
];

export { SITE, MENUS };
