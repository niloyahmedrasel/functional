import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const Order = () => {
  const [data, setData] = useState([]);
 
  
  const userId = localStorage.getItem("userId");
  console.log(userId);
  
  useEffect(() => {
    fetch(`http://localhost:5000/api/order/${userId}`)
      .then((response) => response.json())
      .then((responseData) => setData(responseData.order))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data)

  return (
    <div className="h-screen">
      <Navbar />
      <div className="overflow-x-auto p-4">
        <table className="table-auto w-full border-collapse border border-mytheme-gold bg-mytheme-black shadow-lg text-mytheme-white">
          <thead>
            <tr className="bg-mytheme-gold text-mytheme-black">
              <th className="border border-mytheme-gold px-4 py-2">#</th>
              <th className="border border-mytheme-gold px-4 py-2">Item Name</th>
              <th className="border border-mytheme-gold px-4 py-2">Order Date</th>
              <th className="border border-mytheme-gold px-4 py-2">Amount</th>
              <th className="border border-mytheme-gold px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((order, i) => (
                  <tr key={`${order._id}`} className="text-center">
                    <td className="border border-mytheme-gold px-4 py-2">{i + 1}</td>
                    <td className="border border-mytheme-gold px-4 py-2">{order.itemName}</td>
                    <td className="border border-mytheme-gold px-4 py-2">
                      {new Date(order.orderDate).toLocaleDateString()}
                    </td>
                    <td className="border border-mytheme-gold px-4 py-2">${order.totalAmount}</td>
                    <td className="border border-mytheme-gold px-4 py-2">
                      <button className="bg-mytheme-crimson text-mytheme-white px-4 py-2 rounded-md">
                        Pay
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-mytheme-white">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
