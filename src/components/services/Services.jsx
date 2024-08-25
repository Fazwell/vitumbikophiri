import React from 'react'
import { useState, useEffect } from 'react'
import "./services.css"
import AOS from 'aos'
import "aos/dist/aos.css"
const Services = () => {
    useEffect(()=>{
        AOS.init({duration: 900});
      }, []);

    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index) =>{
        setToggleState(index);
    };
  return (
    <section className='services section' id='services'>
         <h2 data-aos="fade-right" className='section__title'>Services</h2>
        <span data-aos="fade-in" className='section__subtitle'>What I Offer</span>

        <div className='services__container container grid'>
            <div data-aos="fade-right" className='services__content'>
                <div>
                    <i className='uil uil-edit services__icon'></i>
                    <h3 className='services__title'>UX / UI Designing</h3>
                </div>
                <span className='services__button' onClick={()=>toggleTab(1)}>
                    View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={()=>toggleTab(0)} className='uil uil-times service__modal-close'></i>
                        <h3 className='services__modal-title'>UX / UI Designing</h3>
                        <p className='services__modal-description'>
                              4 yeears experience in UI/UX design with Figma providing the following</p>
                             <ul className='services__modakl-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle 
                                    service__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Application Wireframing
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle 
                                    service__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Application Prototyping 
                                    </p>
                                </li>

                             </ul>
                    </div>
                </div>
            </div>
            <div  data-aos="fade-right" className='services__content'>
                <div>
                    <i className='uil uil-arrow services__icon'></i>
                    <h3 className='services__title'>Web Developent</h3>
                </div>
                <span className='services__button' onClick={()=>toggleTab(2)}>
                    View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={()=>toggleTab(0)} className='uil uil-times service__modal-close'></i>
                        <h3 className='services__modal-title'>Web Development</h3>
                        <p className='services__modal-description'>
                            4+ years experience in developing high end quality web applications</p>
                             <ul className='services__modakl-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle 
                                    service__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Business websites
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle 
                                    service__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        E-commerce
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle 
                                    service__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Personal portfolios (i.e. for artists, public figures, and any professional)
                                    </p>
                                </li>

                             </ul>
                    </div>
                </div>
            </div>
            <div  data-aos="fade-right" className='services__content'>
                <div>
                    <i className='uil uil-mobile-android services__icon'></i>
                    <h3 className='services__title'>Mobile App Development</h3>
                </div>
                <span className='services__button' onClick={()=>toggleTab(3)}>
                    View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={()=>toggleTab(0)} className='uil uil-times service__modal-close'></i>
                        <h3 className='services__modal-title'>App Development</h3>
                        <p className='services__modal-description'>
                            3 years of experience in mobile app development for both iOS and Android using React Native.</p>
                             <ul className='services__modakl-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle 
                                    service__modal-icon'></i>
                                    <p className='services__modal-info'>
                                       Mobile Apps for business
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle 
                                    service__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Mobile Apps for Health 
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle 
                                    service__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Mobile Apps for institutions and organisations
                                    </p>
                                </li>

                             </ul>
                    </div>
                </div>
            </div>
            <div  data-aos="fade-right" className='services__content'>
                <div>
                    <i className='uil uil-sitemap services__icon'></i>
                    <h3 className='services__title'>Algorithm Design</h3>
                </div>
                <span className='services__button' onClick={()=>toggleTab(4)}>
                    View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>
                <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={()=>toggleTab(0)} className='uil uil-times service__modal-close'></i>
                        <h3 className='services__modal-title'>Algorithm Design</h3>
                        <p className='services__modal-description'>
                        4+ years experience in modeling algorithms for software applications</p>
                             <ul className='services__modakl-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle 
                                    service__modal-icon'></i>
                                    <p className='services__modal-info'>
                                    Software application use case for users
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle 
                                    service__modal-icon'></i>
                                    <p className='services__modal-info'>
                                    Software application procedures
                                    </p>
                                </li>
                                

                             </ul>
                    </div>
                </div>
            </div>
            <div  data-aos="fade-right" className='services__content'>
                <div>
                    <i className='uil uil-book services__icon'></i>
                    <h3 className='services__title'>Software Documentation</h3>
                </div>
                <span className='services__button' onClick={()=>toggleTab(5)}>
                    View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>
                <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={()=>toggleTab(0)} className='uil uil-times service__modal-close'></i>
                        <h3 className='services__modal-title'>Software Documentation</h3>
                        <p className='services__modal-description'>
                        4+ years experience in technical writing for software applications</p>
                             <ul className='services__modakl-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle 
                                    service__modal-icon'></i>
                                    <p className='services__modal-info'>
                                       User Documentation
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle 
                                    service__modal-icon'></i>
                                    <p className='services__modal-info'>
                                     Developer Documentation
                                    </p>
                                </li>
                                
                              

                             </ul>
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Services