import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {

  const images = [
    'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/1c3912c4-4cb9-4dfb-8c74-a527088f1326/nike-just-do-it.jpg',
    'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/1b6baa74-938b-409a-b278-3b99d883734d/sp23-future-fitness.png',
    'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/0ae55060-8eeb-41be-92b5-5d629837c779/sp23-future-fitness.jpg',
  ];

  const arrowStyles = {
    display: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1
  };

  return (
    <div className='card'>
      <Fade
        duration={2000}
        prevArrow={<div style={arrowStyles}>Prev</div>}
        nextArrow={<div style={arrowStyles}>Next</div>}>
        <div className="each-slide">
          <img src={images[0]} />
        </div>
        <div className="each-slide">
          <img src={images[1]} />
        </div>
        <div className="each-slide">
          <img src={images[2]} />
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;
