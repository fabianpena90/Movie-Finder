import React from "react";
import { Rating } from "semantic-ui-react";

const Ratings = (number) => (
  <Rating
    icon="star"
    defaultRating={number}
    maxRating={5}
    size="huge"
    // disabled
  />
);

export default Ratings;
