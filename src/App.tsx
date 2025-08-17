import './App.css'
import Header from './header/Header'
import Home from './home/Home'
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
