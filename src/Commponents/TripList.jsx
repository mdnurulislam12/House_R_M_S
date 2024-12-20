import React, { useEffect, useState } from 'react'
import "../styles/tripList.scss"
import Loader from "./Loader"
import Navbar from "./Navbar/Navbar"
import { useDispatch, useSelector } from 'react-redux'
import { setTripList } from '../redux/state'
import ListingCard from './ListingCard'

const TripList = () => {
  const [loading, setLoading] = useState(true)
  const userId = useSelector((state) => state.user._id)
  const TripList = useSelector((state) => state.user.tripList)
  console.log(TripList)
  const dispatch = useDispatch()

  const getTripList = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}/trips`, {
        method: "GET"
      })
      const data = await response.json()
      dispatch(setTripList(data))
      setLoading(false)
    } catch (err) {
      console.log("Fetch trip list failed!", err.message)
    }
  }

  useEffect(() => {
    getTripList();
  }, []);

  return loading ? <Loader /> : (
    <>
      <Navbar />
      <h1 className='title-list'>Your Booking List</h1>
      <div className="list">
        {TripList?.map(({ coustomerId,listingId, hostId, startDate, endDate, totalPrice, booking = true }) => <ListingCard
          coustomerId={coustomerId._id}
          listingId={listingId._id}
          creator={hostId._id}
          listingPhotoPaths={listingId.listingPhotoPaths}
          city={listingId.city}
          province={listingId.province}
          country={listingId.country}
          category={listingId.category}
          firstName={coustomerId.firstName}
          lastName={coustomerId.lastName}
          number={coustomerId.number}
          startDate={startDate}
          endDate={endDate}
          totalPrice={totalPrice}
          booking={booking}
        ></ListingCard>)}
      </div>
    </>
  )
}

export default TripList