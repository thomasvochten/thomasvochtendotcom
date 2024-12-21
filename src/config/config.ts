// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Thomas Vochten',
	siteDescription:
		'Welcome to Thomas Vochten&quot;s personal website',
	ogImage: '/og.jpg',
	logo: {
		src: '/avatar.jpg',
		alt: 'Thomas Vochten'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
