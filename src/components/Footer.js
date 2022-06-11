import React from 'react'

//icons
import facebook from '../assets/social-icons/facebook-white_icon.png'
import github from '../assets/social-icons/github-white.png'
import twitter from '../assets/social-icons/twitter-white.png'
import instagram from '../assets/social-icons/instagram-white.png'

//style
import './Footer.css'
export default function Footer() {
	return (
		<footer>
			<img src={facebook} alt='facebook icon' width='40px' />
			<img src={github} alt='github icon' width='40px' />
			<img src={instagram} alt='instagram icon' width='40px' />
			<img src={twitter} alt='twitter icon' width='40px' />
		</footer>
	)
}
