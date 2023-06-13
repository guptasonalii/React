import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyfirstComponent from "./Components/MyfirstComponent";
import About from "./Components/About";
import Jsx from "./Components/Jsx";
import Jsx1 from "./Components/Jsx1";
import Props from "./Components/Props";
import CommonProp from "./Components/CommonProp";

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3 bg-dark text-white">React Tutorial</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/" className="text-dark text-decoration-none">MyFirstComponent</Link>
          </li>
          <li>
            <Link to="/about" className="text-dark text-decoration-none"> About </Link>
          </li>
          <li>
            <Link to="/jsx" className="text-primary text-decoration-none"> Jsx </Link>
          </li>
          <li>
            <Link to="/jsx1" className="text-primary text-decoration-none"> Display Current Date and Time </Link>
          </li>
          <li>
          <Link to="/Props" className="text-primary text-decoration-none">Props </Link>

          </li>

        </ul>

        <Routes>
          <Route path="/" Component={MyfirstComponent} />
          <Route path="/about" element={<About />} />
          <Route path="/jsx" element={<Jsx/>}/>
          <Route path="/jsx1" element={<Jsx1/>}/>
          <Route path="/Props" element={<Props/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
