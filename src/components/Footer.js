import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo512.png'

function Footer() {
  return (
    <div>
     
<footer className="footer-distributed">
<hr style={{color:'white'}} />
			<div className="footer-left">

				<h3>Strayscue<span> <img src={logo} alt="" width='7%' /></span></h3>

				<p className="footer-links">
					<a href="/" className="link-1">Home </a>
					
					<a href="/">Blog</a>
				
					<a href="/">Pricing</a>
				
					<a href="/">About</a>
					
					<a href="/">Faq</a>
					
					<a href="/">Contact</a>
				</p>

				<p className="footer-company-name">Strayscue © 2023</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+91.xxx.xxx.xxxx</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="/"><i className="fa-brands fa-facebook"></i></a>
					<a href="/"><i className="fa-brands fa-twitter"></i></a>
					<a href="/"><i className="fa-brands fa-linkedin"></i></a>
					<a href="/"><i className="fa-brands fa-github"></i></a>

				</div>

			</div>

		</footer>
    </div>
  )
}

export default Footer
