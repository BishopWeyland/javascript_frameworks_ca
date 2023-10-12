import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating, maxRating }) => {
  const filledStars = Math.floor(rating);
  const emptyStars = maxRating - filledStars;

  const starElements = [];
  for (let i = 0; i < filledStars; i++) {
    starElements.push(
      <span key={i} className="star filled-star">
        <FontAwesomeIcon className="text-brand-blue h-7" icon={faStar} />
      </span>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    starElements.push(
      <span key={i + filledStars} className="star empty-star">
        <FontAwesomeIcon className="text-brand-grey h-7" icon={faStar} />
      </span>
    );
  }

  return <div className="star-rating">{starElements}</div>;
};

export default StarRating;
