import React, {useState} from "react"
import {Link} from 'react-router-dom';

const Game2 = () => {
    const [guess , setGuess] = useState(''); 

    const [message , setMessage] = useState('');

    const [number, setNumber] = useState(Math.floor(Math.random() * 30) + 1);

    const [attempts, setAttempts] = useState(0);

    const [isCorrect, setIsCorrect] = useState(false);

    const handleChange = (e) => {
        setGuess(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const userGuess = parseInt(guess,10);
  

    setAttempts(attempts + 1);

    if(userGuess === number){
        setMessage('축하합니다. 맞추셨습니다.');
        setIsCorrect(true);
    } else if(userGuess > number){
        setMessage('숫자가 너무 큽니다');
    } else{
        setMessage('숫자가 너무 작습니다');
    }
    setGuess(''); 
  }

  const handleRestart=(e)=>{

  }

  return(
    <div>
        <h1>스무고개 2단계</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={guess}
                onChange={handleChange}
                placeholder="1에서 30사이의 숫자 입력하기"
                />
                <button>추측하기</button>
        </form>
        <p>{message}</p>
        {isCorrect  ?  
      (<Link to="/game"><button>처음으로 돌아가기</button></Link>) 
      :  
      (<button onClick={handleRestart}>재시작버튼</button>)}

    </div>
  );




};
export default Game2;