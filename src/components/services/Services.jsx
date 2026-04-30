
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

                {/* Case Management */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-heart services__icon"></i>
                        <h3 className="services__title">
                            Case <br /> Management
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {activeModal === 1 && (
                        <div className="services__modal active-modal">
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleModal(1)}></i>

                                <h3 className="services__modal-title">Case Management</h3>
                                <p className="services__modal-description">
                                    Coordinating and managing individual or family cases to ensure access to support services.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li><i className="uil uil-check-circle"></i><p>Client Assessment & Intake</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Care Planning & Goal Setting</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Service Coordination</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Progress Monitoring & Reporting</p></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {/* Counseling */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-comments services__icon"></i>
                        <h3 className="services__title">
                            Counseling <br /> & Support
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(2)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {activeModal === 2 && (
                        <div className="services__modal active-modal">
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleModal(2)}></i>

                                <h3 className="services__modal-title">Counseling & Support</h3>
                                <p className="services__modal-description">
                                    Providing emotional and psychological support to individuals and families.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li><i className="uil uil-check-circle"></i><p>Individual Counseling</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Family & Group Support</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Crisis Intervention</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Mental Health Advocacy</p></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {/* Advocacy */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-balance-scale services__icon"></i>
                        <h3 className="services__title">
                            Advocacy <br /> & Rights
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(3)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {activeModal === 3 && (
                        <div className="services__modal active-modal">
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleModal(3)}></i>

                                <h3 className="services__modal-title">Advocacy & Rights Protection</h3>
                                <p className="services__modal-description">
                                    Supporting and protecting the rights of vulnerable individuals.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li><i className="uil uil-check-circle"></i><p>Legal & Social Advocacy</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Child Protection</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>GBV Support</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Policy Awareness</p></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {/* Community Development */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-users-alt services__icon"></i>
                        <h3 className="services__title">
                            Community <br /> Development
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(4)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {activeModal === 4 && (
                        <div className="services__modal active-modal">
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleModal(4)}></i>

                                <h3 className="services__modal-title">Community Development</h3>
                                <p className="services__modal-description">
                                    Designing and implementing programs that uplift communities.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li><i className="uil uil-check-circle"></i><p>Needs Assessment</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Program Implementation</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Youth & Women Empowerment</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Capacity Building</p></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {/* Research */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-file-alt services__icon"></i>
                        <h3 className="services__title">
                            Research <br /> & Reporting
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(5)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {activeModal === 5 && (
                        <div className="services__modal active-modal">
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleModal(5)}></i>

                                <h3 className="services__modal-title">Research & Reporting</h3>
                                <p className="services__modal-description">
                                    Collecting and analyzing data to inform interventions.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li><i className="uil uil-check-circle"></i><p>Field Research</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Data Analysis</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Report Writing</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Monitoring & Evaluation</p></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {/* Training */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-graduation-cap services__icon"></i>
                        <h3 className="services__title">
                            Training <br /> & Education
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(6)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {activeModal === 6 && (
                        <div className="services__modal active-modal">
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleModal(6)}></i>

                                <h3 className="services__modal-title">Training & Education</h3>
                                <p className="services__modal-description">
                                    Educating communities on key social and health issues.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li><i className="uil uil-check-circle"></i><p>Life Skills Training</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Health Education</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Awareness Campaigns</p></li>
                                    <li><i className="uil uil-check-circle"></i><p>Outreach Programs</p></li>
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