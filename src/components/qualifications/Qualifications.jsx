import React, {useState} from 'react'
import "./qualifications.css"

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = (index) =>{
      setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className='qualification__container container'>
          <div className='qualification__tabs'>
            <div className={
              toggleState === 1 
              ? "qualification__button qualification__active button--flex" 
                :  "qualification__button button--flex"} onClick={()=> toggleTab(1)}>
              <i className="uil uil-graduation-cap
              qualification__icon"></i>Education
            </div>
            <div className={
              toggleState === 2 
              ? "qualification__button qualification__active button--flex" 
                :  "qualification__button button--flex"} onClick={()=> toggleTab(2)} >
              <i className="uil uil-briefcase-alt 
              qualification__icon"></i>Experience
            </div>
          </div>
          <div className='qualification__sections'>
            <div className={toggleState === 1 ? 
              "qualification__content qualification__content-active" 
              : "qualification__content"}>
              <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'>Malawi School leaving Certificate</h3>
                    <span
                    className='qualification__subtitle'>
                      Chitipa Secondary School
                    </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calender-alt'> 
                      </i>2014-2017
                    </div>
                </div>
                <div className=''>
                  <span className='qualification__rounder'>
                  </span>
                  <span className='qualification__line'>

                  </span>
                </div>
              </div>
              <div className='qualification__data'>
                <div></div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>

                <div>
                    <h3 className='qualification__title'>Web developer (Intern)</h3>
                    <span
                    className='qualification__subtitle'>
                      ITERCONN IT Solutions 
                    </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calender-alt'> 
                      </i>2019-2020
                    </div>
                </div>
             
              </div>
              <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'>Bachelors Degree In Social Work</h3>
                    <span
                    className='qualification__subtitle'>
                      DMI St John The Baptist University
                    </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calender-alt'> 
                      </i>2021-2024
                    </div>
                </div>
                <div className=''>
                  <span className='qualification__rounder'>
                  </span>
                  <span className='qualification__line'>

                  </span>
                </div>
              </div>
              <div className='qualification__data'>
                <div></div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>

                <div>
                    <h3 className='qualification__title'>Kivi Fitness (Remote)</h3>
                    <span
                    className='qualification__subtitle'>
                      Data Analyst
                    </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calender-alt'> 
                      </i>2022-Present
                    </div>
                </div>
             
              </div>
            </div>
            <div className={toggleState === 2 ? 
              "qualification__content qualification__content-active" 
              : "qualification__content"}>
              <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'>Computer Science Degree</h3>
                    <span
                    className='qualification__subtitle'>
                      DMI St John The Baptist University
                    </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calender-alt'> 
                      </i>2021-Present
                    </div>
                </div>
                <div className=''>
                  <span className='qualification__rounder'>
                  </span>
                  <span className='qualification__line'>

                  </span>
                </div>
              </div>
              <div className='qualification__data'>
                <div></div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>

                <div>
                    <h3 className='qualification__title'>INTERCONN IT Solutions</h3>
                    <span
                    className='qualification__subtitle'>
                      DMI St John The Baptist University
                    </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calender-alt'> 
                      </i>2019-2020
                    </div>
                </div>
             
              </div>
              <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'>Computer Science Degree</h3>
                    <span
                    className='qualification__subtitle'>
                      DMI St John The Baptist University
                    </span>
                    <div className='qualification__calender'>
                      <i className='uil uil-calender-alt'> 
                      </i>2021-Present
                    </div>
                </div>
                <div className=''>
                  <span className='qualification__rounder'>
                  </span>
                  <span className='qualification__line'>

                  </span>
                </div>
              </div>
           
            </div>
          </div>
        </div>
    </section>
  )
}

export default Qualifications