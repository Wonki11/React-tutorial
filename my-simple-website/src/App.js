import logo from "./logo.svg";
import "./App.css";
import Game from "./component/Game.js";
import Game2 from "./component/GameTwoStep.js";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home.js";
import Navbar from "./component/NavBar.js";
import Header from "./component/Header.js";
import TodoList from "./component/TodoList.js";
import TicTapToe from "./component/TicTapToe.js";
import TicTapToeTwoStep from "./component/TicTapToeTwoStep.js";
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      
      <Routes>
        {/* 링크 모음  예전에는 Switch라고 작성했지만 v6부터 Routes 이름 사용*/}
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-twoStep" element={<Game2 />} />
        <Route path="/todoList" element={<TodoList/>}/>
        <Route path="/tictaptoe" element={<TicTapToe/>}/>
        <Route path="/tictaptoetwostep" element={<TicTapToeTwoStep/>}/>
      </Routes>
    </div>
  );
}

export default App;
