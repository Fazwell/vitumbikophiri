import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Fazwell</h1>
            <ul className='footer__list'>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Service</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact ME</a>
                </li>
            </ul>
            <div className='footer__social'>
                <a href="https://www.instagram.com/iam_fazwel/" className="footer__social-link" target="__blank">
                <i className='uil uil-instagram'></i>
            </a>
            <a href="#home" className="footer__social-link" target="__blank">
                <i className='uil uil-whatsapp'></i>
            </a>
            <a href="https://www.linkedin.com/in/fazwell-mwanguku-0053781b6/" className="footer__social-link" target="__blank">
                <i className='uil uil-linkedin'></i>
            </a>
            </div>
            <span className='footer__copy'>&copy; Panthergenn. All rights reserved</span>
        </div>

    </footer>
  )
}

export default Footer