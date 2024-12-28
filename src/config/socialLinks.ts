// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'linkedin',
		link: 'https://linkedin.com/in/thomasvochten',
		icon: 'linkedin-icon'
	},
	{
		name: 'bluesky',
		link: 'https://bsky.app/profile/thomasvochten.com',
		icon: 'bluesky-icon'
	},
	{
		name: 'github',
		link: 'https://github.com/thomasvochten',
		icon: 'github-icon'
	},
	{
		name: 'signal',
		link: 'https://signal.me/#eu/6XhSIeH1Ck6qdARg1tESkv2GDAdNFo7cJXAyydlxpA99oPf12_VPoKOgjG1KpqA0',
		icon: 'signal-icon'
	},
	{
		name: 'email',
		link: 'mailto:mail@thomasvochten.com',
		icon: 'email-icon'
	}
]
