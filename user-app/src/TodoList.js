import { useState } from "react";
import "./App.css";

function TodoList() {
  const [todos, setTodos] = useState([]); //배열 할일 목록 여러개 생성
  const [task, setTask] = useState(""); // 초기값이 없는상태

  const 추가버튼 = () => {
    setTodos([...todos ,task ]);
    setTask("");
  };

  const 삭제버튼 = (index) => {
    const 삭제후목록 = todos.filter((task, i) => i !== index);
    setTodos(삭제후목록);
  };

  return (
    <div className="App">
      <h1>할일 리스트</h1>
      <h3>할일 추가하기</h3>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={추가버튼}>추가하기</button>
      <h3>할일 리스트 목록보기</h3>
      {todos.map((todo, index) => (
        <li key={index}>
          {index} - {todo}
          <button onClick={() => 삭제버튼(index)}>삭제하기</button>
        </li>
      ))}
    </div>
  );
}

export default TodoList;
