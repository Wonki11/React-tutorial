//axios 이용해서 
// https://jsonplaceholder.typicode.com/comments 해당하는 모든 데이터 가져오기
// textarea 칸 들여쓰기 4칸 설정 

// ul li 태그 이용해서 useId id title complated을 리스트마다 담아서 보여주기
import axios from 'axios';
import React, {useState , useEffect} from 'react';

const Axios_Ex2 = () =>{
    const [data,setData] = useState('');

    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        // 무사히 잘 가져왔다면 then으로 data값 변경
        .then(res => {
            setData(res.data);
        })
        .catch(() =>{
            alert("데이터가져오기실패");
        });
    
    },[]);

    return (
        <>
            <h1>내용 가져오기 </h1>
            <ul>
            {data.amp(comment =>(
                <li key={comment.id}>
                    <strong>UserID : </strong>{comment.id} <br/>
                    <strong>Name : </strong>{comment.name} <br/>
                    <strong>Email : </strong>{comment.email} <br/>
                    <strong>Body : </strong>{comment.body} <br/>

                </li> // 마이페이지 회원정보조회 참고가능
            ))}
            </ul>
        </>
    )
}
export default Axios_Ex2;