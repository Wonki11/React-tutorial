import logo from './logo.svg';
import './App.css';
import {Routes , Route} from "react-router-dom";
import Header from './component/Header';
import NavBar from './component/NavBar';
import Main from './component/Main';
import TodoList from './component/TodoList';
import TicTapToe from './component/TicTapToe';
function App() {
  return (
    <div>
      <Header />
      <NavBar />

      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/tictaptoe" element={<TicTapToe />} />

      </Routes>
    </div>
  );
}

export default App;
