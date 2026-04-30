
import React, { useState } from 'react';
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className='qualification__container container'>
        
        {/* Tabs */}
        <div className='qualification__tabs'>
          <div
            className={toggleState === 1
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={toggleState === 2
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className='qualification__sections'>

          {/* EDUCATION */}
          <div className={toggleState === 1
            ? "qualification__content qualification__content-active"
            : "qualification__content"}>

            {/* MSCE */}
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>MSCE</h3>
                <span className='qualification__subtitle'>
                  Nyungwe Girls Catholic Secondary School
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2017
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            {/* JCE */}
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>JCE</h3>
                <span className='qualification__subtitle'>
                  Bakhita Girls Catholic Secondary School
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2013
                </div>
              </div>
            </div>

            {/* Degree */}
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Bachelor of Social Work (CD & PM)</h3>
                <span className='qualification__subtitle'>
                  DMI St John the Baptist University
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2024
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            {/* Certifications */}
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Professional Certifications</h3>
                <span className='qualification__subtitle'>
                  CBID • Montessori L1 & L2 • Project Management • Disability Assessment • First Aid
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2025 - 2026
                </div>
              </div>
            </div>

          </div>

          {/* EXPERIENCE */}
          <div className={toggleState === 2
            ? "qualification__content qualification__content-active"
            : "qualification__content"}>

            {/* Internship */}
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Psychiatric Unit Intern</h3>
                <span className='qualification__subtitle'>
                  Bwaila Hospital
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> Aug 2022 - Apr 2023
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            {/* Librarian */}
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Library Assistant</h3>
                <span className='qualification__subtitle'>
                  DMI St John the Baptist University
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> Jul 2023 - Aug 2023
                </div>
              </div>
            </div>

            {/* Community Program */}
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Community Research & Advocacy</h3>
                <span className='qualification__subtitle'>
                  Chinsapo 1 Extension Program
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2021 - 2022
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            {/* Main Job */}
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Psycho-Social Counselor</h3>
                <span className='qualification__subtitle'>
                  Fount for Nations – Lilongwe
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> Nov 2025 - Feb 2026
                </div>
              </div>
            </div>

            {/* Volunteering */}
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Youth & Community Volunteer</h3>
                <span className='qualification__subtitle'>
                  Youth Counselling Initiative • Mlera Foundation
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2025 - 2026
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Qualifications;
