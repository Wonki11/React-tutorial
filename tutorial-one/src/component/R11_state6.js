import React,{useState} from "react";

const 댓글내용 = (props) => {
    const {handler} = props;

    return(
        <div>
           {/* // id inputComment */} 
            <label htmlFor="inputComment">댓글</label>
            <input type="text" id="inputComment" onchange={handler}/>
        </div>

    )
   


}

const 작성자 = ({handler}) => {
    // id inputWriter

    return(
        <div>
            <label htmlFor="inputWriter">작성자</label>
            <input type="text" id="inputWriter" onchange={handler}/>
        </div>
    )


}

const 댓글창 = () => {
    //상태 변수 선언
    const [comment,setComment] = useState(''); // '' 나 아무것도 안써도됨 
    const [writer,  setWriter] = useState('');

    

    return(
        <>
        {/* 댓글 입력 창과 댓글작성자 보여주고 
            댓글과 댓글작성자가 모두 안적혀있으면 버튼 비활성화
            모두 적혀있으면 버튼 활성화
        */}
        </>

    )

}
export default 댓글창;