import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
const Other = () => {
    useEffect(()=>{
        AOS.init({duration: 900});
      }, []);
  return (
    <div data-aos="fade-up"  className='skills__content'>
        <h3 className='skills__title'>Technical Knowledge</h3>

        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Soft Skills</h3>
                        <span className='skills__level'>Intermediate</span>
                        
                    </div>
                </div>
                
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Digital Literate</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Ethics</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Adaptability</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
            </div>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Data Analysis</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Flow Control</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Research</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>IoT</h3>
                        <span className='skills__level'>Advanced</span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Other