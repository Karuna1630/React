import React, { useState } from "react";
import profile from "./assets/assets/userProfile.jpg";
import { format } from 'date-fns';
import StarRating from "./Starsh";


function Reviews({}) {
const date = new Date();
  const [reviews, setReview] = useState([]);
  const dateString = format(date, 'yyyy-MM-dd');
  const timeString = format(date, 'HH:mm:ss');


  const addReview = () => {
    let userReview = document.getElementById("userReview").value;
    setReview([...reviews, userReview]);
    document.getElementById("userReview").value = "";
  };
  console.log(reviews);

  return (
    <>
      <div className="w-full  relative  py-2 px-3 mt-5 mb-5 gap-5 flex flex-col shadow-xl border-2 rounded-md">
        {reviews.map((review, index) => (
          <div
            key={index}
            className=" py-4  w-full flex flex-col rounded-md "
          >
            <StarRating rating={5}/>

            <div className="  w-[30%] px-2 py-2 gap-1 flex">
              <img className=" w-10 rounded-full " src={profile} alt="Logo" />
              <span className="  font-bold text-2xl ">Karuna123</span>
              </div>

              <div className="flex py-3 ">
                <span className="font-mono font-semibold px-4 ">{review}</span>
              </div>

            <div className="mb-2 px-3 font-semibold">
                {dateString} , {timeString}

            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="w-full py-2 px-3 mt-5 mb-5 gap-5 flex flex-col shadow-xl border-2 rounded-md">
        <span className="text-2xl font-bold">Write a Review</span>
        <span className="text-xl">Your Review</span>
        <textarea
          id="userReview"
          className="h-[80px] w-full p-2 bg-gray-300 font-sans text-xl "
          placeholder="Enter your review here..."
        ></textarea>
        <span>Your Rating</span>
        <span className="">&#9734;&#9734;&#9734;&#9734;&#9734;</span>
        <button
          type="submit"
          onClick={() => {
            addReview();
          }}
          className=" bg-blue-500 py-2 px-5 rounded text-white font-mono w-[120px]"
        >
          Submit Review
        </button>
      </div>
    </>
  );
}
export default Reviews;
