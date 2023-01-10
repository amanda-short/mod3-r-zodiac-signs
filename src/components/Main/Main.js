import React from 'react';
import './Main.css';
import background from '../Main/background.jpg';
import { zodiacs } from '../../data.js';
import ZodiacSign from '../Signs/Zodiac.js';
import '../Signs/Zodiac.css';

export default function Main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {zodiacs.map((signs) => (
        <ZodiacSign key={signs.id} {...signs} />
      ))}
    </main>
  );
}
