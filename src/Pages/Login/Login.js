import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import img from "../../assets/features-icon-3.png";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen flex items-center justify-center">
        <div className="w-1/5 flex flex-col items-center">
          {/* Center the image */}
          <img src={img} alt="Icon" className="mb-2 w-20 h-20" />
          <h1 className="mb-3 text-mytheme-gold text-2xl font-bold">Login</h1>
          <div className="card w-full shadow-2xl p-8">
            <form>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered input-warning w-full bg-black"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered input-warning w-full bg-black mt-4"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-warning mt-5 w-full"
                >
                  Login
                </button>

                <h1 className="text-sm text-mytheme-crimson mt-3">Don't Have an account?<span className="text-mytheme-gold ml-2"><Link to='/signup'>Sign up</Link></span></h1>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
