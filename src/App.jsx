import Home from "./Home.jsx"
import Chapter1 from "./Chapters/Chapter1.jsx"

import ScrollToTop from "./ScrollToTop.jsx"
import { HashRouter as Router,Routes,Route } from "react-router-dom"

function App() {
  return(
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chapter1" element={<Chapter1/>}/>
      </Routes>
    </Router>
  )
}

export default App
