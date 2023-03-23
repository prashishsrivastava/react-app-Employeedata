import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Personaldata from "./Components/personal_data"
import Home from './Components/profile';
import Login from './Components/Login_page';
import "./Components/style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/profile' element={<Home/>}></Route>
        <Route path='/personaldata' element={<Personaldata/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;