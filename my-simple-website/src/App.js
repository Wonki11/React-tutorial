
import "./App.css";
import Game from "./component/Game.js";
import Game2 from "./component/GameTwoStep.js";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home.js";
import Navbar from "./component/Layout/NavBar.js";
import Header from "./component/Layout/Header.js";
import TodoList from "./component/TodoList.js";
import TicTapToe from "./component/TicTapToe/TicTapToe.js";
import TicTapToeTwoStep from "./component/TicTapToe/TicTapToeTwoStep.js";
import TypingTest from "./component/TypingTest.js";
import MovieRating from "./component/Movie/MovieGrade.js";
import Footer from "./component/Layout/Footer.js";
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      
      <Routes>
        {/* 링크 모음  예전에는 Switch라고 작성했지만 v6부터 Routes 이름 사용*/}
        <Route path="/"                 element={<Home />} />
        <Route path="/game"              element={<Game />} />
        <Route path="/game-twoStep"       element={<Game2 />} />
        <Route path="/todoList"          element={<TodoList/>}/>
        <Route path="/tictaptoe"         element={<TicTapToe/>}/>
        <Route path="/tictaptoetwostep" element={<TicTapToeTwoStep/>}/>
        <Route path="/typingTest"        element={<TypingTest/>}/>
        <Route path="/movieRate"         element = {<MovieRating/>}/>
      </Routes>

      <Footer />
    </div>

    
  );
}


export default App;
