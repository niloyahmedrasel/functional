import React, { useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import toast from 'react-hot-toast';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        personCount: '',
        day: '',
        time: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reservationData = {
            name: formData.name,
            phoneNumber: formData.phoneNumber,
            personCount: formData.personCount,
            status: "Available", // Set the default status as "Available"
            day: formData.day,
            time: formData.time,
            message: formData.message,
        };

        try {
            const response = await fetch('http://localhost:5000/api/table/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success('Reservation created successfully!');
                console.log(data)
            } else {
                toast.error('Failed to create reservation.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="">
            <Navbar />
            <div className="mt-20 lg:mx-20 flex justify-center items-center">
                <form className="w-1/2" onSubmit={handleSubmit}>
                    <h1 className="text-mytheme-gold text-xl font-bold">Online Reservation</h1>
                    <h2 className="mt-5 text-mytheme-white">
                        Booking request{" "}
                        <span className="text-mytheme-gold font-extrabold">01343874374</span>
                    </h2>
                    <h3 className="mt-2 text-mytheme-white">or fill out the order form</h3>
                    <div className="flex flex-col lg:flex-row mt-10">
                        <input
                            data-aos="zoom-in-down"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input input-bordered input-warning lg:w-full w-full m-1 bg-black text-mytheme-gold"
                        />
                        <input
                            data-aos="zoom-in-down"
                            name="phoneNumber"
                            type="text"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="input input-bordered input-warning lg:w-full w-full m-1 bg-black text-mytheme-gold"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <input
                            data-aos="zoom-in-down"
                            name="personCount"
                            type="text"
                            placeholder="How many person?"
                            value={formData.personCount}
                            onChange={handleChange}
                            className="input input-bordered input-warning w-full m-1 bg-black text-mytheme-gold"
                        />
                        <input
                            data-aos="zoom-in-down"
                            name="day"
                            type="date"
                            value={formData.day}
                            onChange={handleChange}
                            className="input input-bordered input-warning w-full m-1 bg-black text-mytheme-gold"
                        />
                        <input
                            data-aos="zoom-in-down"
                            name="time"
                            type="text"
                            placeholder="Time"
                            value={formData.time}
                            onChange={handleChange}
                            className="input input-bordered input-warning w-full m-1 bg-black text-mytheme-gold"
                        />
                    </div>
                    <textarea
                        data-aos="zoom-in-down"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="textarea textarea-warning w-full bg-black text-mytheme-gold"
                        placeholder="Message"
                    ></textarea>
                    <button type="submit" className="btn btn-warning text-xl mt-2">
                        Submit
                    </button>
                </form>
                <div className="ml-10 lg:mt-10 text-left">
                    <h1 className="text-mytheme-white text-xl">Contact Us</h1>
                    <h1 className="mt-5 text-mytheme-white">Booking Request</h1>
                    <h1 className="font bold text-mytheme-gold text-2xl mt-3">01343874374</h1>
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
            <Footer />
        </div>
    );
};

export default Reservation;
