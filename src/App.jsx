import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Commponents/HomePage/HomePage"
import Registation from "./Commponents/Registation/Registation"
import LoginPage from "./Commponents/LoginPage/LoginPage"
import CreateListing from './Commponents/CreateListing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Registation />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/create-listing' element={<CreateListing></CreateListing>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
