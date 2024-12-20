import React, { useEffect, useState } from 'react'
import "../styles/ListingDetails.scss"
import { useNavigate, useParams } from 'react-router-dom'
import Loader from "../Commponents/Loader"
import { facilities } from '../data'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import Navbar from './Navbar/Navbar'
import { useSelector } from 'react-redux'
import { Favorite } from '@mui/icons-material'

const ListingDetails = () => {
    const [loading, setLoading] = useState(true)

    const { listingId } = useParams()
    const [listing, setListing] = useState(null)


    const user = useSelector((state) => state.user);
    const wishList = user?.wishList || [];

    const isLiked = wishList?.find((item) => item?._id === listingId);

    /**Get Listing Details */
    const getListingDetails = async () => {
        try {
            const response = await fetch(`http://localhost:3001/properties/${listingId}`,
                {
                    method: "GET",
                })

            const data = await response.json()
            setListing(data)
            setLoading(false)
        } catch (err) {
            console.log("Fatch Listing Details Failed", err.massage)
        }
    }

    useEffect(() => {
        getListingDetails()
    }, [])



    /**Booking Calendar */


    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);


    const handleSelect = (ranges) => {
        //Update the selected date range when user makes a selection
        setDateRange([ranges.selection]);
    };

    //month logic
    /** Booking Logic */


    //day logic

    const start = new Date(dateRange[0].startDate)
    const end = new Date(dateRange[0].endDate)
    const dayCount = Math.round(end - start) / (1000 * 60 * 60 * 24)//calculate the difference in day unite

    /**submit booking */
    const coustomerId = useSelector((state) => state?.user?._id)

    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            const bookingForm = {
                coustomerId,
                listingId,
                hostId: listing.creator._id,
                startDate: dateRange[0].startDate.toDateString(),

                endDate: dateRange[0].endDate.toDateString(),
                totalPrice: listing.price * dayCount,
            }

            const response = await fetch("http://localhost:3001/bookings/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookingForm)
            })

            if (response.ok) {
                navigate(`/${coustomerId}/trips`)
            }

        } catch (err) {
            console.log("Submit Booking failed.", err.message)
        }
    }

    return loading ? (<Loader />) : (
        <>
            <Navbar />
            <div className="listing-details">
                <div className="title">
                    <h1>{listing.title}</h1>
                    <button className='save' >
                        {isLiked ? (
                            <Favorite sx={{ color: "red" }} />
                        ) : (
                            <Favorite sx={{ color: "block" }} />
                        )}
                        <p>Save</p>
                    </button>
                </div>
                <div className="photos">
                    {listing.listingPhotoPaths?.map((item) => (
                        <img src={`http://localhost:3001/${item.replace("public", "")}`} alt='listing photo' />
                    ))}
                </div>
                <h2>{listing.type} in {listing.city}, {listing.province}, {listing.country} <br /> {listing.category}</h2>
                <p>{listing.guestCount} guests - {listing.bedroomCount} bedroom(s) - {listing.bedCount} bed(s) - {listing.bathroomCount} bathroom(s)</p>
                <hr />

                <div className="profile">
                    <img src={`http://localhost:3001/${listing.creator.profileImagePath.replace("public", "")}`} alt="profile photo" />
                    <h3>Hosted by {listing.creator.firstName} {listing.creator.lastName}</h3>
                    <h3>Call: {listing.creator.number}</h3>
                </div>
                <hr />
                <h3>Description</h3>
                <p>{listing.description}</p>
                <hr />
                <h3>{listing.highlight}</h3>
                <p>{listing.highlightDesc}</p>
                <hr />

                <div className="booking">
                    <div>
                        <h2>What this place offers?</h2>
                        <div className="amenities">
                            {listing.amenities[0].split(",").map((item, index) => (
                                <div className="facility" key={index}>
                                    <div className="facility_icon">
                                        {
                                            facilities.find((facility) => facility.name === item)
                                                ?.icon
                                        }
                                    </div>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2>How long do you want to stay?</h2>
                        <div className="date-range-calendar">

                            {listing.category !== "Hostel" ? "" : (
                                <>
                                    <DateRange ranges={dateRange} onChange={handleSelect} />
                                    {dayCount > 1 ? (
                                        <h2>BDT {listing.price} x {dayCount} nights</h2>
                                    ) : (
                                        <h2>BDT {listing.price} x {dayCount} night</h2>
                                    )}
                                    <h2>Total price: BDT {listing.price * dayCount}</h2>

                                    <p>Start Date: {dateRange[0].startDate.toDateString()}</p>
                                    <p>End Date: {dateRange[0].endDate.toDateString()}</p>
                                </>
                            )}


                            <button onClick={handleSubmit} className="button" type="submit">
                                BOOKING
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListingDetails