import React from 'react';
import './PinItem.css'

function PinItem(props) {
  return (
    <div className='pin__item'>
        <figure className='pin__item__pic-wrap' data-category={props.label}>
            <img
              className='pin__item__img'
              alt='uniedu'
              src={props.src}
            />
        </figure>
        <div className='pin__item__info'>
            <h5 className='pin__item__text'>{props.text}</h5>
        </div>
    </div>
  );
}

export default PinItem;