import React from 'react';

// Function to render stars

// StarRating component
const StarRating = ({ rating }) => {
  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <span key={index} className="text-yellow-500 pr-1">&#9733;</span>
    ));
  };
  

  return (
    <div>
      {renderStars(rating)}
    </div>
  );
};

export default StarRating;


