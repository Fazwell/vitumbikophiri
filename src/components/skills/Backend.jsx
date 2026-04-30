
import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"

const Backend = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <div data-aos="fade-up" className='skills__content'>
      <h3 className='skills__title'>Professional Practice</h3>

      <div className='skills__box'>

        {/* LEFT */}
        <div className='skills__group'>

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
              <h3 className='skills__name'>Assessment</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Listening</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Case Work</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className='skills__group'>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Advocacy</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Mobilization</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>M&E</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Reporting</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Backend