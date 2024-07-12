import React, {useState , useEffect} from "react";
//https://jsonplaceholder.typicode.com/photos
// 데이터 가져오기 Fetch API 이용해서 실행

const 사진리스트 = () => {
    const [사진들 , set사진들] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            return res.json();
        })


        .then(데이터 => {
            //set사진들(데이터); api 주소가 작성된 모든 데이터 가져오기
            // 데이터의 일부분만 가져오려면 slice를 이용
            // slice(처음가져올범위, 어디까지 가져올지 마무리하는 마무리 범위)
            set사진들(데이터.slice(0 , 10));
        })
        .catch(에러 => {
            alert("에러가 발생" + 에러);
        })
    })

    return (
        <>
        <h1>사진리스트</h1>
        <ul>
            {사진들.map(사진 => (
                <li key={사진.id}>
                   <img src={사진.thumbnailUrl}/>
                   <p>{사진.title}</p>
                 {/*이미지는 img src로 지정 */}
                    
                </li>
            ))}

        </ul>
        </>
    )
}
export default 사진리스트;
// export defalut를 맨 위에 작성하면 에러가 발생하기 때문에 맨 밑에 작성