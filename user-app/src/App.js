import { useState } from "react";
import User from "./User";
function App() {
  // 빈 목록들
  // const [userList, setUserList] = useState([]);

  // DB에서 가져올 목록이 없거나, 초기에 예제 목록을 작성할 때 사용하는 방법
  const [userList, setUserList] = useState([
    { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },
    { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },
    { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
  ]);

  return (
    <div className="App">
      <h1>회원 정보 출력</h1>
      <hr></hr>
      <table className="member_tbl">
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>전화번호</th>
            <th>삭제</th>
          </tr>
        </thead>

        <tbody>
          {userList.map((item, index) => (
            <User
              key={"user" + index}
              user={item}
              userList={userList}
              setUserList={setUserList}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default App;
