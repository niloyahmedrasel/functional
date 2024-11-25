import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

const Reservation = () => {
    return (
        <div className=''>
        <Navbar></Navbar>
        <div className=" mt-20 lg:mx-20  flex justify-center items-center">
        <form className="w-1/2">
          <h1 className="text-mytheme-gold text-xl font-bold ">
            Online Reservation{" "}
          </h1>
          <h2 className="mt-5 text-mytheme-white ">
            Booking request{" "}
            <span className="text-mytheme-gold font-extrabold">01343874374</span>
          </h2>
          <h3 className="mt-2 text-mytheme-white">or fill out the order form</h3>
          <div  className="flex flex-col lg:flex-row   mt-10">
            <input data-aos='zoom-in-down'
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered input-warning lg:w-full w-full m-1 bg-black text-mytheme-gold "
            />
            <input data-aos='zoom-in-down'
              name='number'
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-warning lg:w-full w-full m-1 bg-black  text-mytheme-gold"
            />
          </div>
          <div className="flex flex-col lg:flex-row   ">
            <input data-aos='zoom-in-down'
              name='person'
              type="text"
              placeholder="How many person?"
              className="input input-bordered input-warning w-full m-1 bg-black text-mytheme-gold"
            />
            <input data-aos='zoom-in-down'
              name='date'
              type="date"
              className="input input-bordered input-warning w-full m-1 bg-black text-mytheme-gold"
            />
            <input data-aos='zoom-in-down'
              name='time'
              type="text"
              placeholder="Time"
              className="input input-bordered input-warning w-full m-1 bg-black text-mytheme-gold"
            />
          </div>
          <textarea data-aos='zoom-in-down'
            name='message'
            className="textarea textarea-warning w-full bg-black text-mytheme-gold"
            placeholder="Message"
          ></textarea>
          <button className="btn btn-warning text-xl mt-2">Submit</button>
        </form>
        <div className="ml-10 lg:mt-10 text-left">
          <h1 className="text-mytheme-white text-xl">Contact Us</h1>
          <h1 className="mt-5 text-mytheme-white">Booking Request</h1>
          <h1 className="font bold text-mytheme-gold text-2xl mt-3">
            01343874374
          </h1>
          <h1 className="text-mytheme-white mt-2">Location</h1>
          <h1 className="text-mytheme-silver mt-1">Uttara sector 14</h1>
          <h1 className="text-mytheme-white mt-2">Lunch Time</h1>
          <h1 className="text-mytheme-silver mt-1">Monday to Sunday</h1>
          <h1 className="text-mytheme-silver mt-1">11 am-2:30pm</h1>
          <h1 className="text-mytheme-white mt-2">Dinner Time</h1>
          <h1 className="text-mytheme-silver mt-1">Monday to Sunday</h1>
          <h1 className="text-mytheme-silver mt-1">5 pm-10pm</h1>
        </div>
      </div>

      <Footer></Footer>
        </div>
    );
};

export default Reservation;