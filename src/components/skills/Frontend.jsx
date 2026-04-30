
import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css"

const Frontend = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <div data-aos="fade-up" className='skills__content'>
      <h3 className='skills__title'>Core Skills</h3>

      <div className='skills__box'>

        {/* LEFT */}
        <div className='skills__group'>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Communication</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Counseling</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Empathy</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Crisis Care</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className='skills__group'>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Leadership</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Teamwork</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Facilitation</h3>
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

        </div>

      </div>
    </div>
  )
}

export default Frontend
