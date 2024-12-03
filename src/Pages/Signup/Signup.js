import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import img from "../../assets/features-icon-3.png";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import toast from 'react-hot-toast';

const Signup = () => {

  const navigate = useNavigate();

  const buttonHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value; // Access the input name="email"
    const password = form.password.value; // Access the input name="password"
    const data = { email, password };

    try {
      const response = await fetch("http://localhost:5000/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Signup failed");
      }

      const result = await response.json();
      localStorage.setItem("userId", result._id);
      toast.success("Signup successful!");
      console.log("Signup result:", result);

      navigate("/")

    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.message || "Something went wrong");
    }
  };



    return (
        <div>
        <Navbar></Navbar>
        <div className="hero min-h-screen flex items-center justify-center">
        <div className="w-1/5 flex flex-col items-center">
          {/* Center the image */}
          <img src={img} alt="Icon" className="mb-2 w-20 h-20" />
          <h1 className="mb-3 text-mytheme-gold text-2xl font-bold">Sign Up</h1>
          <div className="card w-full shadow-2xl p-8">
            <form onSubmit={buttonHandler}>
              <div className="form-control">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered input-warning w-full bg-black"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  name ="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered input-warning w-full bg-black mt-4"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-warning mt-5 w-full"
                >
                  Sign Up
                </button>

                <h1 className="text-sm text-mytheme-crimson mt-3">Have an account?<span className="text-mytheme-gold ml-2"><Link to='/login'>Login</Link></span></h1>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
     </div>
    );
};

export default Signup;