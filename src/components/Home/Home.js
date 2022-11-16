import React from 'react';
import "./Home.css"

function Home() {

  setTimeout(function() {

    window.addEventListener("load", scrollTest);
    
    const cardsHtml = document.getElementsByClassName('playingCard');
    var cards = [].slice.call(cardsHtml);
    const cardSection = document.querySelector('.cardsAnim');
  
    function scrollTest() {
      if (-20 > cardSection.offsetTop || cards[0].classList.contains('anim')) {
        cards.forEach((e) => {
          e.classList.add('anim');
        });
      }  
    }
  
  }());
  
  return (
    <div>
 
 <section className="cardsAnim">
  <div className="playingCardContainer">
    <div className="playingCard c1"></div>
    <div className="playingCard c2"></div>
    <div className="playingCard c3"></div>
    <div className="playingCard c4"></div>
    <div className="playingCard c5"></div>
  </div>
</section>
 
    </div>
  );
}

export default Home;
