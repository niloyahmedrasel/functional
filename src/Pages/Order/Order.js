import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const Order = () => {
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <div class="overflow-x-auto p-4">
  <table class="table-auto w-full border-collapse border border-mytheme-gold bg-mytheme-black shadow-lg text-mytheme-white">
    <thead>
      <tr class="bg-mytheme-gold text-mytheme-black">
        <th class="border border-mytheme-gold px-4 py-2">#</th>
        <th class="border border-mytheme-gold px-4 py-2">Item Name</th>
        <th class="border border-mytheme-gold px-4 py-2">Order Date</th>
        <th class="border border-mytheme-gold px-4 py-2">Amount</th>
        <th class="border border-mytheme-gold px-4 py-2">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-center">
        <td class="border border-mytheme-gold px-4 py-2">1</td>
        <td class="border border-mytheme-gold px-4 py-2">Chicken Curry</td>
        <td class="border border-mytheme-gold px-4 py-2">2024-11-25</td>
        <td class="border border-mytheme-gold px-4 py-2">$15.00</td>
        <td class="border border-mytheme-gold px-4 py-2">
          <button class="bg-mytheme-crimson text-mytheme-white px-4 py-2 rounded-md">Pay</button>
        </td>
      </tr>
      <tr class="text-center">
        <td class="border border-mytheme-gold px-4 py-2">2</td>
        <td class="border border-mytheme-gold px-4 py-2">Rice</td>
        <td class="border border-mytheme-gold px-4 py-2">2024-11-25</td>
        <td class="border border-mytheme-gold px-4 py-2">$5.00</td>
        <td class="border border-mytheme-gold px-4 py-2">
          <button class="bg-mytheme-crimson text-mytheme-white px-4 py-2 rounded-md">Pay</button>
        </td>
      </tr>
      <tr class="text-center">
        <td class="border border-mytheme-gold px-4 py-2">3</td>
        <td class="border border-mytheme-gold px-4 py-2">Egg Curry</td>
        <td class="border border-mytheme-gold px-4 py-2">2024-11-25</td>
        <td class="border border-mytheme-gold px-4 py-2">$12.00</td>
        <td class="border border-mytheme-gold px-4 py-2">
          <button class="bg-mytheme-crimson text-mytheme-white px-4 py-2 rounded-md">Pay</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

      <Footer></Footer>
    </div>
  );
};

export default Order;
