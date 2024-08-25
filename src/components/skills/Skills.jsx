import React, {useEffect} from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import Other from './Other'
import AOS from 'aos'
import "aos/dist/aos.css"

const Skills = () => {
  useEffect(()=>{
    AOS.init({duration: 900});
  }, []);
  return (
    <section className='skills section' id='skills'>
        <h2 data-aos="fade-up" className='section__title'>Skills</h2>
        <span data-aos="fade-in" className='section__subtitle'>My Technical Skills</span>
        <div className='skills__container container grid '>
            <Frontend />
            <Backend/>
            <Other/>
        </div>

    </section>
  )
}

export default Skills