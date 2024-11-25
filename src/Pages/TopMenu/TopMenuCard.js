import React from "react";
import { Link } from "react-router-dom";

const TopMenuCard = ({card}) => {
  return (
    <div className="card w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={card.img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">{card.title}</h2>
        <div className="card-actions">
          <button className="btn btn-warning">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default TopMenuCard;
