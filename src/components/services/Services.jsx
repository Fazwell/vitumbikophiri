import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [activeModal, setActiveModal] = useState(null);

    const toggleModal = (index) => {
        if (activeModal === index) {
            setActiveModal(null);
        } else {
            setActiveModal(index);
        }
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            UX / UI <br /> Designing
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {activeModal === 1 && (
                        <div className={`services__modal active-modal`}>
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleModal(1)}></i>

                                <h3 className="services__modal-title">UX / UI Designing</h3>
                                <p className="services__modal-description">
                                    Experienced in UI/UX design with Figma providing the following services:
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Application Wireframing</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Application Prototyping</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Web Design</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Mobile App Design</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-sitemap services__icon"></i>
                        <h3 className="services__title">
                            Algorithm <br /> Designing
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(2)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {activeModal === 2 && (
                        <div className={`services__modal active-modal`}>
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleModal(2)}></i>

                                <h3 className="services__modal-title">Algorithm Design</h3>
                                <p className="services__modal-description">
                                    Crafted efficient, and scarable algorithms tailored to meet the needs of your business.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Custom Algorithm Design</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Problem Solving Expertise</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Real World Application</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Consultation and Code Review</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            Frontend <br /> Development
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(3)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {activeModal === 3 && (
                        <div className={`services__modal active-modal`}>
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleModal(3)}></i>

                                <h3 className="services__modal-title">Frontend Development</h3>
                                <p className="services__modal-description">
                                    Building responsive and modern web applications using the latest frontend technologies.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Responsive Web Design</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Mobile App Design</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Single Page Applications (SPA)</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Progressive Web Applications (PWA)</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Frontend Frameworks (React, React Native, Next Js, Django)</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-cog services__icon"></i>
                        <h3 className="services__title">
                            Backend <br /> Development
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(4)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {activeModal === 4 && (
                        <div className={`services__modal active-modal`}>
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleModal(4)}></i>

                                <h3 className="services__modal-title">Backend Development</h3>
                                <p className="services__modal-description">
                                    Writing well defined functional code that works seamlessly to process frontend data.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>API DDevelopment & Integration</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Database Management</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Web Authentication & Authorization</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Business logic implementation</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Server and Deployment Management</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-file-alt services__icon"></i>
                        <h3 className="services__title">
                            Software <br /> Documentation
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(5)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {activeModal === 5 && (
                        <div className={`services__modal active-modal`}>
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleModal(5)}></i>

                                <h3 className="services__modal-title">Software Documentation</h3>
                                <p className="services__modal-description">
                                Providing a well insight for code use, review and maintenanced.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Technical or code documentation</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>User and use case documentation</p>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">
                            Content <br /> Creation
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(6)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {activeModal === 6 && (
                        <div className={`services__modal active-modal`}>
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleModal(6)}></i>

                                <h3 className="services__modal-title">Content Creation</h3>
                                <p className="services__modal-description">
                                    Crafting engaging and informative content for various platforms and audiences.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Blog Writing</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>SEO Content</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Social Media Content</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Video Scripts</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                
            </div>
        </section>
    );
};

export default Services;
