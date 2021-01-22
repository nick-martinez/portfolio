import React from 'react';
import './Cards.css';

function CardsItem(props) {
  return (
    <>
      <li className="cardsItem">
        <a href={props.htmlLink} target="_blank" className="cardsItemLink">
          <figure className="cardsItemPicWrap" dataCategory={props.label}>
            <img src={props.src} alt="REPLACE IMAGE" className="cardsItemImage"/>
          </figure>
          <div className="cardsItemInfo">
            <h5 className="cardsItemText">
              {props.text}
            </h5>
          </div>
        </a>
      </li>
    </>
  )
}

export default CardsItem
