import React from 'react';
import './Jumbotron.css';

const Jumbotron = (props) => (
<div className="jumbotron">
  <h1> React Memory Game!</h1>
  <p>Click on an image to earn points, but be careful to not click on the same image twice. if you do you will reset your game</p>
  <p>Score: {props.score} <span> High Score: {props.highScore} </span></p>
</div>
)

export default Jumbotron;