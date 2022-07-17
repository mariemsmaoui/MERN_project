import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">

      <span>
        <i
          className={
            rating >= 1
              ? 'fa fa-star'
              : rating >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 1.5
              ? "fa fa-star-half-alt"
              : "far fa-star"
          }
       />
     
      
      </span>
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
     
      
      </span>
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? "fa fa-star"
              : rating >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span className="review">
        {numReviews}  Reviews
      </span>
    </div>
  );
}

export default Rating;
