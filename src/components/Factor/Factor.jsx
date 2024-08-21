import React from 'react';
import './Factor.css';
import { assets } from '../../assets/assets.js';

const Factor = () => {
  return (
    <div className="factors" id="x-factor">
      <div className="left-factor">
        <div className="left-box">
          <div className="number">1</div>
          <div className="head">Aroma</div>
          <div className="content">
            Enchanting fragrances waft through the air, enticing passersby
            with the promise of heavenly, freshly baked delights and sweet
            indulgence.
          </div>
        </div>
        <div className="left-box">
          <div className="number">2</div>
          <div className="head">Variety</div>
          <div className="content">
            Our diverse array of treats ensures everyone finds their perfect
            match, from classic favorites to unique, innovative creations for
            every craving
          </div>
        </div>
      </div>

      <div className="middle-factor">
        <img src={assets.cake} alt="Cake" className="back" />
      </div>

      <div className="right-factor">
        <div className="right-box">
          <div className="number">3</div>
          <div className="head">Ambience</div>
          <div className="content">
            Step into a cozy haven, where warm colors and inviting decor
            create a homely atmosphere, making every visit a delightful
            experience.
          </div>
        </div>

        <div className="right-box">
          <div className="number">4</div>
          <div className="head">Presentation</div>
          <div className="content">
            Elevating the visual feast, our artful displays showcase
            delectable creations, inviting you to indulge not just in taste
            but also aesthetics.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Factor;
