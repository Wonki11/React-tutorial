import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserList from './UserList';

const App = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element = {<UserList/>}/>
                
                {/* <Link to = "/userlist" /> */}
            </Routes>
        </Router>
        </>
    )
}
export default App;