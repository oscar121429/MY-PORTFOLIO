
import "./styles/global.css"
import { Home } from './Pages/Home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProjectDetail } from "./Pages/ProjectDetail/ProjectDetail"

function App() {
 

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/project/:id" element={<ProjectDetail />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
