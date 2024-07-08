import React, {useEffect , useState } from 'react';
import {Link} from 'react-router-dom';
import './TicTapToe.css';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const TicTapToe= () => {
  const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n + 1)));
  const [nextNumber, setNextNumber] = useState(1);
  const [message, setMessage] = useState('');

  const handleNumberClick = (number) => {
    if (number===nextNumber) {
      if (number=== 9) { 
        setMessage('성공');
      } else {
        setNextNumber(nextNumber + 1);
      }
    } else {
     setMessage('실패');
    }
  };

  const handleRestart = () => {
    setNumbers(shuffleArray([...Array(9).keys()].map(n => n + 1)));
    setNextNumber(1); // 번호초기화
    setMessage(''); // 메세지 초기화
  };

  return (
    <div className="tic-tap-container">
      <h1>Tic Tac Toe</h1>
      <div className="grid">
        {numbers.map((number) => (
          <button key={number} onClick={() =>handleNumberClick(number)} className="number-button">
            {number}
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
      <button onClick={handleRestart} className="restart-button">게임 재시작</button>
    </div>
  );
};

export default TicTapToe;
