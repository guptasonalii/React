import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyfirstComponent from "./Components/MyfirstComponent";
import About from "./Components/About";
import Jsx from "./Components/Jsx";
import Jsx1 from "./Components/Jsx1";
import Props from "./Components/Props";
import State from "./Components/State";
import Events from "./Components/Events";
import List from "./Components/List";
import Hooks from "./Components/Hooks";
import Hooks1 from "./Components/Hooks1";
import Hooks2 from "./Components/Hooks2";
import UseEffect from "./Components/UseEffect";
import UseEffect1 from "./Components/UseEffect1"
import PropDrilling from "./Components/PropDrilling";
import ContextApi from "./Components/ContextApi";




function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3 bg-dark text-white">React Tutorial</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/" className="text-dark text-decoration-none">
              MyFirstComponent
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-dark text-decoration-none">
              {" "}
              About{" "}
            </Link>
          </li>
          <li>
            <Link to="/jsx" className="text-primary text-decoration-none">
              {" "}
              Jsx{" "}
            </Link>
          </li>
          <li>
            <Link to="/jsx1" className="text-primary text-decoration-none">
              {" "}
              Display Current Date and Time{" "}
            </Link>
          </li>
          <li>
            <Link to="/Props" className="text-primary text-decoration-none">
              Props{" "}
            </Link>
          </li>
          <li>
            <Link to="/Rendering" className="text-primary text-decoration-none">
              Conditional Rendering{" "}
            </Link>
          </li>
          <li>
            <Link to="/Events" className="text-primary text-decoration-none">
              Events{" "}
            </Link>
          </li>
          <li>
            <Link to="/List" className="text-primary text-decoration-none">
              List{" "}
            </Link>
          </li>
          <li>
            <Link to="/Hooks" className="text-primary text-decoration-none">
              Hooks
            </Link>
          </li>
          <li>
            <Link to="/Hooks1" className="text-primary text-decoration-none">
              Hooks1
            </Link>
          </li>
          <li>
            <Link to="/Hooks2" className="text-primary text-decoration-none">
              useStateHook
            </Link>
          </li>
          <li>
            <Link to="/UseEffect" className="text-primary text-decoration-none">
              useeffectHook
            </Link>
          </li>
          <li>
            <Link to="/UseEffect1" className="text-primary text-decoration-none">
              useeffectHook1
            </Link>
          </li>
          <li>
            <Link to="/PropDrilling" className="text-primary text-decoration-none">
            PropDrilling
            </Link>
          </li>
          <li>
            <Link to="/ContextApi" className="text-primary text-decoration-none">
            ContextApi
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" Component={MyfirstComponent} />
          <Route path="/about" element={<About />} />
          <Route path="/jsx" element={<Jsx />} />
          <Route path="/jsx1" element={<Jsx1 />} />
          <Route path="/Props" element={<Props />} />
          <Route path="/Rendering" element={<State />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/List" element={<List />} />
          <Route path="/Hooks" element={<Hooks />} />
          <Route path="/Hooks1" element={<Hooks1 />} />
          <Route path="/Hooks2" element={<Hooks2 />} />
          <Route path="/UseEffect" element={<UseEffect/>}/>
          <Route path="/UseEffect1" element={<UseEffect1/>}/>
          <Route path="/PropDrilling" element={<PropDrilling/>}/>
          <Route path="/ContextApi" element={<ContextApi/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
