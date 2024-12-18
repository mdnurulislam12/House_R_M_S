import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Commponents/HomePage/HomePage"
import Registation from "./Commponents/Registation/Registation"
import LoginPage from "./Commponents/LoginPage/LoginPage"
import CreateListing from './Commponents/CreateListing'
import ListingDetails from './Commponents/ListingDetails'
import TripList from './Commponents/TripList'
import Wishlist from './Commponents/Wishlist'
import PropertyList from './Commponents/PropertyList'
import ReservationsLists from './Commponents/ReservationsLists'
import CategoryPage from './Commponents/CategoryPage'
import SearchPage from './Commponents/SearchPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Registation />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/create-listing' element={<CreateListing></CreateListing>} />
          <Route path='/properties/:listingId' element={<ListingDetails></ListingDetails>}></Route>
          <Route path='/properties/category/:category' element={<CategoryPage />}></Route>
          <Route path='/properties/search/:search' element={<SearchPage />}></Route>
          <Route path='/:userId/trips' element={<TripList></TripList>}></Route>
          <Route path='/:userId/wishList' element={<Wishlist></Wishlist>}></Route>
          <Route path='/:userId/properties' element={<PropertyList></PropertyList>}></Route>
          <Route path='/:userId/reservations' element={<ReservationsLists />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
