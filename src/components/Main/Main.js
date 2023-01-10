import React from 'react';
import './Main.css';
import background from '../Main/background.jpg';

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}></main>;
}
