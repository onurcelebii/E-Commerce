import React from "react";

const StarsRating = ({ rating }) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <i
          key={`filled-${index}`}
          className="bi bi-star-fill"
          style={{ color: "#FFD700" }}
        ></i>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <i
          key={`empty-${index}`}
          className="bi bi-star"
          style={{ color: "#FFD700" }}
        ></i>
      ))}
    </div>
  );
};

export default StarsRating;
