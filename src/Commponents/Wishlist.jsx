import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar/Navbar'
import ListingCard from './ListingCard'

const Wishlist = () => {
    const wishList = useSelector((state)=> state.user.wishList)

    console.log(wishList)

    return (
    <>
    <Navbar />
    <h1 className='title-list'>Your Wish List</h1>
    <div className="list">
        {wishList?.map(({_id,creator, listingPhotoPaths, city, province, country, category, type, price, booking = false})=> (<ListingCard 
        listingId={_id}
        creator={creator}
        listingPhotoPaths={listingPhotoPaths}
        city={city}
        province={province}
        country={country}
        type={type}
        price={price}
        booking={booking}
         />))}
    </div>
    </>
  )
}

export default Wishlist