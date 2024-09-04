import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
const Backend = () => {
    useEffect(()=>{
        AOS.init({duration: 900});
      }, []);
  return (
    <div data-aos="fade-up" className='skills__content'>
        <h3 className='skills__title'>Backend Development</h3>

        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Express JS </h3>
                        <span className='skills__level'>Intermediate</span>
                        
                    </div>
                </div>
                
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Python</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>MySQL</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Git</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
            </div>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Node Js</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Writing API's</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Mongo DB</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Algorithms</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend