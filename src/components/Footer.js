import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../style/footer.scss';

export default function Footer() {

  const infoUser = () => {
    const date = [
      {
        icon: faLocationDot,
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam, recusandae fugiat reiciendis culpa amet molestias nesciunt unde? Maxime vero officiis minima asperiores cum soluta reiciendis molestiae sunt laboriosam cupiditate.'
      },
      {
        icon: faPhone,
        p: '+1-543-123-4567'
      },
      {
        icon: faEnvelope,
        p: 'example@fylo.com'
      },
    ]
    return date;
  }
  return (
    <footer className='footer'>

      <section className='container-access'>
        <h4>Get early access today</h4>
        <p className='description-acces'>it only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be  happy to help you.</p>
        <div>
          <input type="text" placeholder='email@example.com'/>
          <button>Get Started For Free</button>
        </div>
      </section>

      <section>
        <img src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1651857493/Sprint-3-reto-1/logo_wfr12j.svg" alt="" />  
        <div className='intems-infos'>
          {
            infoUser().map((element, index) => ( 
              <div className='item-info' key={index}>
                <FontAwesomeIcon icon={element.icon} />
                <p>{element.p}</p>
              </div>
            ))
          }     
        </div>
      </section>

      <section className='options'>
        <div>
          <p>About Us</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Blog</p>
        </div>
        <div>
          <p>Contact Us</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
      </section>

      <section className='redes'>
        <span><FontAwesomeIcon icon={faFacebookF} /></span>
        <span><FontAwesomeIcon icon={faTwitter} /></span>
        <span><FontAwesomeIcon icon={faInstagram} /></span>
      </section>
    </footer>
  )
}
