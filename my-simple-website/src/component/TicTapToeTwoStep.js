import React, {useState} from "react";
import './TicTapToe.css'
import {Link} from 'react-router-dom';

const 배열랜덤섞기 = (배열) => {
    return 배열.sort(() => Math.random() - 0.5);
}

const TicTapToeTwoStep = () => {
    const [numbers, setNumbers] = useState(
        배열랜덤섞기([...Array(20).keys()].map((n) => n+ 1))
    );

    const [nextNumber, setNextNumber] = useState(1);

    const [message,setMessage] = useState("화이팅"); 

    const 숫자클릭하기 = (number) => {
        if (number === nextNumber) {
            if (number === 20) {
                setMessage("추카추카")
            } else {
                setNextNumber(nextNumber + 1);
            }
        } else{
            setMessage("다시해");
        }
    };

    const 재시작버튼 = () => {
        setNumbers(배열랜덤섞기([...Array(20).keys()].map(n=>n+1)));

        
    }
    return(
        <div className="tictaptoe-container">
            <h1>틱탭토 2 </h1>
            <div className="tictaptoe1-grid">
                {numbers.map((number) => (
                    <button className="tictaptoe-button" key={number} onClick={() => 숫자클릭하기(number)}>
                        {number}
                    </button>
                ))}    
            </div>
            <p>{message}</p>
            <button className="restart-button" onClick={재시작버튼}>게임 재시작</button>
            <Link to="/tictaptoe"><button className='restart-button'>1단계로 이동</button></Link>


        </div>
    )
}
export default TicTapToeTwoStep;