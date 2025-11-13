import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"

function App() {

  return (
    <>
      <BrowserRouter basename="/milena-portfolio">
        <Routes>
          <Route path="/" index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
