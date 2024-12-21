// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/avatar.jpg',
		alt: 'Thomas Vochten',
		text: 'thomasvochten.com'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Blog', link: '/blog' },		
		{ name: 'Speaking', link: '/speaking' },
		{ name: 'About', link: '/about' },
		{ name: 'Contact', link: '/contact' },

	],
	navActions: []
}
