import './App.css'
import Header from './header/Header'
import Home from './home/Home'
import Register from './register/Register'
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
