import React, { useState, useEffect } from 'react'
import "../styles/PropertyList.scss"
import Navbar from './Navbar/Navbar'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setListings } from '../redux/state'
import ListingCard from './ListingCard'


const CategoryPage = () => {
    const [loading, setLoading] = useState(true)
    const {category} = useParams()
    console.log(category)

    const listings = useSelector((state)=>state.listings);

    const dispatch = useDispatch()

    const getFeedListings = async () => {
            try {
                const response = await fetch(`http://localhost:3001/properties?category=${category}`,
                    {
                        method: "GET",
                    }
                );
    
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
    
                const data = await response.json();
                dispatch(setListings({ listings: data }));
                setLoading(false);
            } catch (err) {
                console.log("Fetch Listings Failed", err.message);
            }
        };
    
        useEffect(() => {
            getFeedListings();
        }, [category]);
    

    return loading ? <Loader /> : (
        <>
            <Navbar />
            <h1 className='title-list'>{category} listings</h1>
            <div className="list">
                {listings?.map(({ _id, creator, listingPhotoPaths, city, province, country, category, type, price, booking = false }) => (<ListingCard
                    listingId={_id}
                    creator={creator}
                    listingPhotoPaths={listingPhotoPaths}
                    city={city}
                    province={province}
                    country={country}
                    category={category}
                    type={type}
                    price={price}
                    booking={booking}
                />))}
            </div>
        </>
    )
}

export default CategoryPage