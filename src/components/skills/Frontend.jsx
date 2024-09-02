import React,{ useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css"

const Frontend = () => {
    useEffect(()=>{
        AOS.init({duration: 900});
      }, []);
  return (
    <div data-aos="fade-up"  className='skills__content'>
        <h3 className='skills__title'>Frontend Development</h3>

        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>JavaScript</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>React Js</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>React Native</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Figma</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
            </div>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>TypeScript</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Next Js</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Electron Js</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Draw.io</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Frontend