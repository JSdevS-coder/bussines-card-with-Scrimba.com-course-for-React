import React from 'react'

import ProfileImage from '../assets/cvphoto.jpg'
import LinkedIn from '../assets/social-icons/LinkedIn-white_icon.png'
import email from '../assets/social-icons/email.png'

//style
import './Info.css'
export default function Info() {
	return (
		<section id='info'>
			<img src={ProfileImage} alt='profile' width='400px' id='profile-img' />
			<h1>Semmy</h1>
			<p>Frontend Developer</p>
			<div id='buttons'>
				<button>
					<img
						src={email}
						alt='email icon'
						width='50px'
						style={{ margin: 0 }}
					/>
					<h3>Email</h3>
				</button>
				<button>
					<img src={LinkedIn} alt='LinkedIn icon' width='40px' />
					<h3 style={{ marginTop: '1.2em' }}>LinkedIn</h3>
				</button>
			</div>
		</section>
	)
}
