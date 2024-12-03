import React from 'react';

const SingleItem = ({ element }) => {
  const { name, image, price, description } = element;
  
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img

            src={`http://localhost:5000/upload/${image}`}
            alt={`Image of ${name}`}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body">
          <div className='flex justify-between'>
            <h2 className="card-title">{name}</h2>
            <h2 className="card-title text-mytheme-crimson">price ${price}</h2>
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-warning">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
