import React , {useEffect} from 'react'
import './home.css'
import Socials from './Socials'
import Data from './Data'
import ScrollDown from './ScrollDown'
import AOS from 'aos'
import "aos/dist/aos.css"

const Home = () => {
  useEffect(()=>{
    AOS.init({duration: 900});
  }, []);
  return (
    <section className='home section' id='home'>
        <div className='home__container container grid'>
            <div className='home__content grid'>
                <Socials />
                <div data-aos="fade-left" className='home__img'>

                </div>
                <Data />
            </div>
            <ScrollDown />
        </div>

    </section>
  )
}

export default Home