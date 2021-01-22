import React from 'react';
import CardsItem from './CardsItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1 class="cardsTitle">CHECK THIS OUT</h1>
      <div className="cardsContainer">
        <div className="cardsWrapper">
          <ul className="cardsItems">
            <CardsItem 
              src="../../../images/thinking-over.com.png"
              text="thinking-over.com"
              label="Blog Site"
              htmlLink="https://thinking-over.com"
            />
          </ul>
          <ul className="cardsItems">
            <CardsItem 
              src="../../../images/campus-key-demo.png"
              text="Campus Key"
              label="Demo"
              htmlLink="https://www.youtube.com/watch?v=p7gTHfmzKMU&feature=youtu.be"
            />
            <CardsItem 
              src="../../../images/glitch.png"
              text="GLITCH"
              label="Silly Beginner Projects"
              htmlLink="https://glitch.com/dashboard?group=owned&sortColumn=boost&sortDirection=DESC&page=1&showAll=false&filterDomain="
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
