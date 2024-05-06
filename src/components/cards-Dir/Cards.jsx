// Cards.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './cards.css';

function Cards({ imgUrl, name, description, siteLink }) {
  return (
    <figure className='cardContainer'>
      <div className='imgContainer'>
        <img src={imgUrl} className='cardImg' alt={name} />
      </div>
      <figcaption className='cardBody'>
        <h2 className='cardTitle'>{name}</h2>
        <p className='cardDesc'>{description}</p>
        <a href={siteLink} target='_blank' rel='noopener noreferrer'>
          <Button variant="primary" className='cardBtn'>Live Demo</Button>
        </a>
      </figcaption>
    </figure>
  );
}

Cards.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired,
};

export default Cards;
