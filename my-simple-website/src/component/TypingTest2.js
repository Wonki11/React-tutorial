import React, {useState} from "react";
import Result from '/Result';
import './TypingTest.css';
import { Link } from "react-router-dom";

const 타자대회 = () => {
    const [텍스트입력, set텍스트입력] = useState(''); 
    const [결과확인, set결과확인] = useState(false); 

    const 타이핑문제 = '도토리는 엄청나게 맛있다';

    const 값변경하기 = (e) => {
        set텍스트입력(e.target.value);

        if(e.target.value === 타이핑문제){
            set결과확인(true);
        }
    }
    
    const 다시시작 = () => {
        set텍스트입력('');
        set결과확인 (false);
    }
    return (
        <div className="typing-test">
            <h1>타자치기대회</h1>
            <p>{타이핑문제}</p>
            <div className="typing=container">
            
            <textarea
                value={텍스트입력}
                onChange={값변경하기}
                disabled={결과확인}
            />
        </div>
        
        {결과확인 && <Result inputText={텍스트입력} correctText={타이핑문제} />}
        {결과확인 && }
        </div>
    )
}