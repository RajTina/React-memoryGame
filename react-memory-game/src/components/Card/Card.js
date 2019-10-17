import React from 'react';
import './Card.css';

const onClick = (props) => {
	props.randomCards();
	props.updateScore(props.id);
}

const Card = (props) => (
    <div>
      <a href="#" className="thumbnail" onClick={() => onClick(props)}>
        <img style={{height: 250, width: 250, marginBottom: 10}}alt = {props.name} className="image" src={props.image} />
      </a>
    
 </div>
)

export default Card