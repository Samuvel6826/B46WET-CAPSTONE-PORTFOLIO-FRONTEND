import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css'

function Cards({imgUrl, name, description, siteLink}) {
  return <>
     <div className='cardContainer'>
        <div className='imgContainer'>
            <img variant="top" src={imgUrl} className='cardImg'/>
        </div>
        <div className='cardBody'>
          <div className='cardTitle'>{name}</div>
          <div className='cardDesc'>
            {description}
          </div>
          <a href={siteLink} target='blank'><Button variant="primary" className='cardBtn'>Live Demo</Button></a>
        </div>
    </div>
  </>
}

export default Cards