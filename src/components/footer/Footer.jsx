
import React from 'react'
import personalLogo from "../../assets/mylogo.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>

            <div className='personal_logo'>
                <img src={personalLogo} alt='PRG' />
            </div>
            
            <h1 className='footer__title'>Vitumbiko Phiri</h1>

            <ul className='footer__list'>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Service</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact Me</a>
                </li>
            </ul>

            {/* Updated Socials */}
            <div className='footer__social'>

                <a 
                    href="https://www.instagram.com/vitu20.20" 
                    className="footer__social-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className='uil uil-instagram'></i>
                </a>

                <a 
                    href="https://wa.me/265884454770" 
                    className="footer__social-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className='uil uil-whatsapp'></i>
                </a>

                <a 
                    href="https://www.linkedin.com/in/vitumbiko-phiri-55ba3525b" 
                    className="footer__social-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className='uil uil-linkedin'></i>
                </a>

            </div>

            <span className='footer__copy'>
                &copy; {new Date().getFullYear()} Vitumbiko Phiri. All rights reserved
            </span>

        </div>
    </footer>
  )
}

export default Footer

