import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../style/main.scss';
import Item from './Item';

export default function Main() {

  const items = () => {
    const arrItems = [
      {
        img: 'https://res.cloudinary.com/dxhgejzwc/image/upload/v1651857494/Sprint-3-reto-1/icon-access-anywhere_k4anbo.svg',
        name: 'Access your files, anywhere',
        description: 'The ability to use a smartphone, tablet, or computerto access youracount means your files follow you enerywhere.',
        id: 1
      },
      {
        img: 'https://res.cloudinary.com/dxhgejzwc/image/upload/v1651857493/Sprint-3-reto-1/icon-security_i0qd7l.svg',
        name: 'Security you can trust',
        description: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
        id: 2
      },
      {
        img: 'https://res.cloudinary.com/dxhgejzwc/image/upload/v1651857495/Sprint-3-reto-1/icon-collaboration_ngqk2c.svg',
        name: 'Real-time collaboration',
        description: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required',
        id: 3
      },
      {
        img: 'https://res.cloudinary.com/dxhgejzwc/image/upload/v1651857495/Sprint-3-reto-1/icon-any-file_jrepx2.svg',
        name: 'Store any type of file',
        description: "Whether you're sharing holidays photos or work documnets, fylo has you covered allowing for all file types to be securely stored and shared.",
        id: 4
      }
    ]
    return arrItems
  }

  const comentUser = () => {
    const card = [
      {
        comment: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        img: 'https://res.cloudinary.com/dxhgejzwc/image/upload/v1651857493/Sprint-3-reto-1/profile-1_lik9na.jpg',
        nameUser: 'Satish Patel',
        group: 'Founter & CEO, Huddle'
      },
      {
        comment: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        img: 'https://res.cloudinary.com/dxhgejzwc/image/upload/v1651857494/Sprint-3-reto-1/profile-2_i8u9og.jpg',
        nameUser: 'Bruce McKenzie',
        group: 'Founter & CEO, Huddle'
      },
      {
        comment: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        img: 'https://res.cloudinary.com/dxhgejzwc/image/upload/v1651857494/Sprint-3-reto-1/profile-3_ne0zli.jpg',
        nameUser: 'Iba Boyd',
        group: 'Founter & CEO, Huddle'
      }
    ];
    return card;
  }
  return (
    <div className='container-main'>

      <section className='container-card'>
        <img className='img-card' src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1651857494/Sprint-3-reto-1/illustration-intro_ljewen.png" alt="" />
        <h2 className='title-card'>
          All your filesin one secure location, accessible anywhere.
        </h2>
        <p>
          Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with frineds family, and co-workers.
        </p>
        <button className='btn-card'>Get started</button>
      </section>

      <section className='services'>
        {
          items().map(item => (
            <Item key={item.id} element={item}/>
          ))
        }
      </section>
      
      <section className='container-card-2'>
        <img className='img-card-2' src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1651857494/Sprint-3-reto-1/illustration-stay-productive_mhv0nt.png" alt="" />
        <h4 className='title-card'>Stay Productive, wherever tou are</h4>
        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p className='name-item'>Securely share files and foolders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <a href="" className='flyo-works'> See how Flyo works <span className='row-enlace'><FontAwesomeIcon className="icon" icon={faArrowRightLong} /></span> </a>
      </section>

      <section className='container-coments'>
        <img className='comillas' src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1651857494/Sprint-3-reto-1/bg-quotes_cxgump.png" alt="" />
        {
          comentUser().map((element, index) => ( 
            <div className='container-comment' key={index}>
              <p>{element.comment}</p>
              <div className='user'>
                <img className='img-user' src={element.img} alt="" />
                <div>
                  <h4>{element.nameUser}</h4>
                  <p>{element.group}</p>
                </div>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}

