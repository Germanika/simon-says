import React, { useState } from 'react';
import styles from './GameButton.module.css';

export default function GameButton({ button, onClick }) {
  const { number, color } = button
  const [pos, setPos] = useState({x: 0, y: 0})
  return (
    <button
      className={styles[`${color}GameButton`]}
      style={{transform: `translate(${pos.x}px,${pos.y}px)`, transition: `500ms ease-in-out`}}
      onClick={() => onClick(button)}
      onMouseEnter={() => setPos({x: Math.floor(Math.random() * 150) - 75, y: Math.floor(Math.random() * 150) - 75})}
    >
      { number }
    </button>
  );
}
