import React from 'react';

const SingleItem = () => {
    return (
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
        <div className='flex justify-between'>
          <h2 className="card-title">Shoes!</h2>
          <h2 className="card-title text-mytheme-crimson">price $100</h2>
        </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-warning">Order Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SingleItem;