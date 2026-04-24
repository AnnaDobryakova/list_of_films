import { BrowserRouter, Route, Routes } from "react-router-dom"
import Films from "./components/Films"
import PopularFilms from "./components/PopularFilms"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Films />} />
        <Route path="/popular" element={<PopularFilms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
