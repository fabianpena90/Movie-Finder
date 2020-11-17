import React from "react";
import { Rating } from "semantic-ui-react";

const Ratings = (props) => (
  <Rating icon="star" defaultRating={4.5} maxRating={5} size="huge" disabled />
);

export default Ratings;
