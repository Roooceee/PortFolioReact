import { BrowserRouter as Rooter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Allprojects from "./pages/allprojects";

function App() {
  return (
    <Rooter>

      <Routes>

        <Route path = "/" element={<Home/>} />
        <Route path = "/Projets" element={<Allprojects/>} />


      </Routes>

    </Rooter>
  )
}

export default App