import React ,{useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"

const Socials = () => {
  useEffect(()=>{
    AOS.init({duration: 900});
  }, []);
  return (
    <div data-aos="fade-right"className="home__social">
        <a href="https://www.instagram.com/iam_fazwel/" className="home__social-icon" target="__blank">
            <i className='uil uil-instagram'></i>
        </a>
        <a href="#home" className="home__social-icon" target="__blank">
            <i className='uil uil-whatsapp'></i>
        </a>
        <a href="https://www.linkedin.com/in/fazwell-mwanguku-0053781b6/" className="home__social-icon" target="__blank">
            <i className='uil uil-linkedin'></i>
        </a>
    </div>
  )
}

export default Socials