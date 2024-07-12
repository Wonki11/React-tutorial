

const Pagination = ({itemPerPage,totalItems,paginate,currentPage}) => {
    const 페이지번호들 = [];
    const totalPages = Math.ceil(totalItems / itemPerPage); //올림

    for(let i = 1; i <= totalPages; i++) {
        console.log("페이지네이션 i 값 : " + i);
        페이지번호들.push(i);
    }

    const renderPageNumber = () => {
        if(totalPages <= 10){
            return 페이지번호들;
        }
        const startPage = Math.max(1, currentPage -5);

        const endPage = Math.min(totalPages,currentPage + 4);

        return 페이지번호들.slice(startPage - 1 , endPage);
    }

    return (
        <nav>
            <ul className="pagination">
                {currentPage > 1 &&(
                    <li><a onClick={() => paginate(currentPage -1)} href="!#" className="page-link">
                            &laquo;
                        </a>
                    </li>
                )}

            

            {renderPageNumber().map(번호 => (
                <li key={번호} className={`page-item ${currentPage === 번호 ? 'active' : ''}`}>
                    <a onClick={() => paginate(번호)} href="!#" className="page-link">
                        {번호}
                    </a>
                </li>
            ))}
            {currentPage < totalPages &&(
                <li><a onClick={()=> paginate(currentPage + 1)} href="!#" className="page-link">
                    &raquo;
                    </a>
                 </li>
            )}
            </ul>
        </nav>
    )
}
export default Pagination;