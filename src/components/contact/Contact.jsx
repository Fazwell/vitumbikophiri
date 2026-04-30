
import React, {useRef, useEffect} from 'react'
import "./contact.css"
import emailjs from "@emailjs/browser"
import AOS from 'aos'
import "aos/dist/aos.css"

const Contact = () => {

  useEffect(()=>{
    AOS.init({duration: 900});
  }, []);

  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm(
      "service_m2cjbct",
      "template_xmgp9tw", 
      form.current,
      "sgEOZobS9JsvguFmq"
    )
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <section className='contact section' id='contact'>
      <h2 data-aos="fade-right" className='section__title'>Get in touch</h2>
      <span data-aos="fade-in" className='section__subtitle'>Contact Me</span>

      <div className='contact__container container grid'>

        {/* LEFT SIDE */}
        <div className='contact__contect'>
          <h3 className='contact__title'>Talk to me</h3>

          <div className='contact__info'>

            {/* Email */}
            <div data-aos="flip-up" className='contact__card'>
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>phirikim47@gmail.com</span>
            </div>

            {/* Phone 1 */}
            <div data-aos="flip-up" className='contact__card'>
              <i className='bx bxs-phone contact__card-icon'></i>
              <h3 className='contact__card-title'>Phone</h3>
              <span className='contact__card-data'>+265 992 082 407</span>
            </div>

            {/* Phone 2 */}
            <div data-aos="flip-up" className='contact__card'>
              <i className='bx bxs-phone-call contact__card-icon'></i>
              <h3 className='contact__card-title'>Alt Phone</h3>
              <span className='contact__card-data'>+265 884 454 770</span>
            </div>

            {/* Address */}
            <div data-aos="flip-up" className='contact__card'>
              <i className='bx bx-map contact__card-icon'></i>
              <h3 className='contact__card-title'>Address</h3>
              <span className='contact__card-data'>
                P.O Box 263, Lilongwe
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div data-aos="fade-in" className='contact__contect'>
          <h3 className='contact__title'>Write me a message</h3>

          <form className='contact__form' ref={form} onSubmit={sendEmail}>

            <div className='contact__form-div'>
              <label className='contact__form-tag'>Name</label>
              <input 
                type="text" 
                name='client_name'
                className='contact__form-input'
                placeholder='Insert your name'
              />
            </div>

            <div className='contact__form-div'>
              <label className='contact__form-tag'>E-mail</label>
              <input 
                type="email" 
                name='client_email'
                className='contact__form-input'
                placeholder='Insert your email'
              />
            </div>

            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag'>Message</label>
              <textarea
                name='client_message'
                className='contact__form-input'
                cols="30"
                rows="10"
                placeholder='Write your message'
              />
            </div>

            <button className='button button--flex' type='submit'>
              Send a message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z"
                  fill="var(--container-color)"
                />
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                />
              </svg>
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact;
