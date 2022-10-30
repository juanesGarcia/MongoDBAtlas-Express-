import './App.css';
import  Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Api } from "./screens/Api.js";
import './App.css';
function App() {
  return (
    <div>
      <div className='container'>
          <Router>
        <Routes>
          <Route exact path="/" element={<Api/>}></Route>
        </Routes>
      </Router> 
      </div>
      <Footer></Footer>
      
    </div>
   
  )
    
}

export default App;
