import { BrowserRouter as Rooter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Allprojects from "./pages/allprojects";
import RGPD from "./pages/legalmentions";

import './style.css'

function App() {

  return (
    <Rooter>

      <Routes>

        <Route path = "/" element={<Home/>} />
        <Route path = "/tous-mes-projets" element={<Allprojects/>} />
        <Route path = "/mentions-legales" element={<RGPD/>} />


      </Routes>

    </Rooter>
  )
}

export default App