// import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './cards.css';

function Cards({ imgUrl, name, description, siteLink }) {
  return (
    <>
      <div className='cardContainer'>
        <div className='imgContainer'>
          <img src={imgUrl} className='cardImg' alt='Card Image' />
        </div>
        <div className='cardBody'>
          <div className='cardTitle'>{name}</div>
          <div className='cardDesc'>
            {description}
          </div>
          <a href={siteLink} target='_blank' rel='noopener noreferrer'>
            <Button variant="primary" id='cardBtn'>Live Demo</Button>
          </a>
        </div>
      </div>
    </>
  );
}

Cards.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired,
};

export default Cards;
