
import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"

const Socials = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <div data-aos="fade-right" className="home__social">

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/vitu20.20" 
        className="home__social-icon" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className='uil uil-instagram'></i>
      </a>

      {/* WhatsApp */}
      <a 
        href="https://wa.me/265884454770" 
        className="home__social-icon" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className='uil uil-whatsapp'></i>
      </a>

      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/vitumbiko-phiri-55ba3525b" 
        className="home__social-icon" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className='uil uil-linkedin'></i>
      </a>

    </div>
  )
}

export default Socials

