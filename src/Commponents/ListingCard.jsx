import React, { useState } from 'react'
import "../styles/ListingCard.scss"
import {
  ArrowForwardIos,
  ArrowBackIosNew,
  Favorite,
} from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setWishList } from '../redux/state';

const ListingCard = ({ listingId, creator, listingPhotoPaths, city, province, country, category, type, price, startDate, endDate, totalPrice, booking }) => {

  console.log(creator)
  /**slider for Images */
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + listingPhotoPaths.length) % listingPhotoPaths.length
    )
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listingPhotoPaths.length)
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**add to wishlist */
  const user = useSelector((state) => state.user);
  const wishList = user?.wishList || [];
  console.log(wishList)
  const isLiked = wishList?.find((item) => item?._id === listingId);

  const patchWishList = async () => {
    if (user?._id !== creator._id) {
      const response = await fetch(`http://localhost:3001/users/${user?._id}/${listingId}`,
        {
          method: "PATCH",
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      const data = await response.json();
      dispatch(setWishList(data.wishList));
    } else { return; }
  }

  return (
    <div className="listing-card"
      onClick={() => {
        navigate(`/properties/${listingId}`)
      }}
    >
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
          {listingPhotoPaths?.map((photo, index) => (
            <div className="slide">
              <img src={`http://localhost:3001/${photo?.replace("public", "")}`} alt={`photo ${index + 1}`} />
              <div className="prev-button" onClick={(e) => { e.stopPropagation(); goToPrevSlide(e) }}>
                <ArrowBackIosNew className='arrow-icon' ></ArrowBackIosNew>
              </div>
              <div className="next-button" onClick={(e) => { e.stopPropagation(); goToNextSlide(e) }}>

                <ArrowForwardIos className='arrow-icon'></ArrowForwardIos>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3>{city}, {province}, {country}</h3>
      <p>{category}</p>
      {!booking ? (
        <>
          <p>{type}</p>
          <p><span>${price}</span> per night</p>
        </>
      ) : (
        <>
          <p>{startDate} - {endDate}</p>
          <p>${totalPrice} total</p>
        </>
      )}
      <button
        className="favorite"
        onClick={(e) => {
          e.stopPropagation();
          patchWishList();
        }}
        disabled={!user}
      >
        {isLiked ? (
          <Favorite sx={{ color: "red" }} />
        ) : (
          <Favorite sx={{ color: "white" }} />
        )}
      </button>
    </div>
  )
}

export default ListingCard