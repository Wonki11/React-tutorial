import React from "react";

const 결과 = ({텍스트입력, 결과확인}) => {
    //isCorrect 는 텍스트로 입력한 값과 결과확인이 일치하는지 확인
    const isCorrect = 텍스트입력 === 결과확인;


return (
    <div calssName="result">
        <h2>결과</h2>
        {isCorrect ? (
            <p>완벽히 작성</p>
        ) : (
            <p>틀렸습니다</p>
        )
    }

    </div>

 );

};
export default 결과;