import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Commponents/HomePage/HomePage"
import Registation from "./Commponents/Registation/Registation"
import LoginPage from "./Commponents/LoginPage/LoginPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Registation />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
