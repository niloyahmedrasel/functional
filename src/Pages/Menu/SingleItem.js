import React from 'react';
import toast from 'react-hot-toast';

const SingleItem = ({ element }) => {
  const { name, image, price, description,_id } = element;

  const userId = localStorage.getItem("userId");
  
  const buttonHandler = async() => {
    console.log("id", _id);
    console.log("userId", userId);
    const response = await fetch(`http://localhost:5000/api/order/create/${_id}/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }})
      const data = await response.json();

      console.log("Response Data:", data);
      if(response){
        toast.success("Order Placed Successfully")
      }
      else{
        toast.error("Order Failed")
      }
      
  };
    
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
            <button onClick={buttonHandler} className="btn btn-warning">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
