import React, {useState , useEffect} from 'react';
import Pagination from './Pagination';
import axios from 'axios';
// https://jsonplaceholder.typicode.com/photos

// 이용해서 한 페이지에서 이미지 5개씩 보이기

const Album = () => {
    const [data , setData] = useState([]);

    const [currentPage , setCurrentPage] = useState(1);

   // const photosPerPage = 5;
    const [itemPerPage] = useState(5);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            setData(res.data);
        })
        .catch((error) => {
            console.error("사진 데이터 가져오는 데 실패했습니다." , error);
        });
    },[]);

    // 페이지마다 처음 가져오는 앨범 마지막에 가져오는앨범 어디서부터 어디까지 가져올 것인지 설정
    const 마지막항목 = currentPage * itemPerPage; 
    const 첫번째항목 = 마지막항목 - itemPerPage;
    const 게시글리스트 = data.slice(첫번째항목,마지막항목);

    // 페이지 변경 처리
    const paginate = (페이지번호) => setCurrentPage(페이지번호);

    return (
        <div className = 'container'>
            <h1>페이지네이션 예제2</h1>
            <ul className = 'list-group mb-4'>
                {게시글리스트.map(항목 => (
                    <li key={항목.id} className='list-group-item'>
                        <img src={항목.thumbnailUrl}/>
                        {항목.title}
                    </li>
                ))}
            </ul>

            <Pagination
                itemPerPage={itemPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage} />
        </div>
    )
}
export default Album;