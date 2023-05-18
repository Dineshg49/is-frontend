import React from 'react';

import icon1 from '../Img/footericon1.png'
import icon2 from '../Img/footericon2.png'
import icon3 from '../Img/icon3.png'
import '../styles/Footer.css'


const styles = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  backgroundColor: '#02858D',
  textAlign: 'center',
  paddingTop: '10vw',
  zIndex:100,
  height:'10vh',

};

const ItemList = () => {
    return (
        <div className="item-list">
        <div className="item">
          <img src={icon1} alt="icon1" className="icon" />
          <span className="footertitle">91-0990897689</span>
        </div>
        <div className="item">
          <img src={icon1} alt="icon2" className="icon" />
          <span className="footertitle">91-0990897689</span>
        </div>
        <div className="item">
          <img src={icon2} alt="icon3" className="icon" />
          <span className="footertitle">www.tto.iiit.ac.in</span>
        </div>
      </div>
    );
  };
  

const Footer = () => {
  return (
    <footer style={styles}>
      <p>This is my fixed footer.</p>
      <ItemList/>

    </footer>
  );
};

export default Footer;
