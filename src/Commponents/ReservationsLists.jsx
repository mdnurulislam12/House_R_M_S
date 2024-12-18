import React, { useEffect, useState } from 'react'
import "../styles/ReservationsList.scss"
import Navbar from './Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { setReservationList } from '../redux/state'
import ListingCard from './ListingCard'
import Loader from './Loader'


const ReservationsLists = () => {
    const [loading, setLoading] = useState(true)
    const userId = useSelector((state)=> state.user._id)
    const reservationList = useSelector((state)=> state.user.reservationList)

    console.log(reservationList)

    const dispatch = useDispatch()

    const getReservationList = async ()=>{
        try{
            const response = await fetch(`http://localhost:3001/users/${userId}/reservations`,
                {
                    method: "GET",
                }
            )
            const data = await response.json();
            dispatch(setReservationList(data))
            setLoading(false)
        } catch (err){
            console.log("Fetch Reservation List failed!", err.message)
        }
    }

    useEffect(()=>{
        getReservationList()
    },[])

  return loading ? <Loader /> : (
    <>
     <Navbar></Navbar>
     <h1 className="title-list">Your Reservation List</h1>
     <div className="list">
        {
            reservationList?.map(({coustomerId, listingId, hostId, startDate, endDate, totalPrice, booking=true})=><ListingCard
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
            />)
        }
     </div>
    </>
  )
}

export default ReservationsLists