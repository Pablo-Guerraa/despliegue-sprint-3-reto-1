import React from 'react';
import '../style/main.scss';

export default function Item({element}) {
  return (
    <div key={element.id} className='item'>
      <img src={element.img} alt="" />
      <h4 className='name-item'>{element.name}</h4>
      <p>{element.description}</p>
    </div>
  )
}
