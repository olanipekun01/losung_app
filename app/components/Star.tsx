import React from "react";

const starRating = (rating) => {
    return (
      <>
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            <Star filled={rating > index} /> {/* Use rating for actual stars */}
          </span>
        ))}
      </>
    );
  };