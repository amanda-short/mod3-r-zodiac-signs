import React from 'react';
import './Zodiac.css';

export default function ZodiacSign(props) {
  return (
    <div className="sign">
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/${props.name}.png`} />
      <span className="name">{props.name}</span>
      <span className="dates">{props.dates}</span>
    </div>
  );
}
