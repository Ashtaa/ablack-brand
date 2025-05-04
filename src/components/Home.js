import React from 'react';
import './home.css';

import img1 from '../img/model.jpg';
import img2 from '../img/model-back.jpg';
import img3 from '../img/model1.jpg';
import img4 from '../img/model2.jpg';
import img5 from '../img/model3.jpg';

const images = [img1, img2, img3, img4, img5];

function Home() {
  return (
    <div className="home-wrapper">
      <div className="scrolling-bg">
        {[...images, ...images].map((src, index) => (
          <img key={index} src={src} alt={`bg-${index}`} className="scroll-img" />
        ))}
      </div>
      <div className="home-container">
        <h1>WELCOME TO A BLACK</h1>
        <h2>explore your fit</h2>
      </div>
    </div>
  );
}

export default Home;
