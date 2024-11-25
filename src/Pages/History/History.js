import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

const History = () => {
    return (
        <div className="h-screen">
        <Navbar></Navbar>
        <div class="overflow-x-auto p-4">
        <table class="table-auto w-full border-collapse border border-mytheme-gold bg-mytheme-black shadow-lg text-mytheme-white">
          <thead>
            <tr class="bg-mytheme-gold text-mytheme-black">
              <th class="border border-mytheme-gold px-4 py-2">Order ID</th>
              <th class="border border-mytheme-gold px-4 py-2">User</th>
              <th class="border border-mytheme-gold px-4 py-2">Status</th>
              <th class="border border-mytheme-gold px-4 py-2">Total Amount</th>
              <th class="border border-mytheme-gold px-4 py-2">Payment Status</th>
              <th class="border border-mytheme-gold px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center hover:bg-mytheme-silver">
              <td class="border border-mytheme-gold px-4 py-2">12345</td>
              <td class="border border-mytheme-gold px-4 py-2">User123</td>
              <td class="border border-mytheme-gold px-4 py-2 text-mytheme-gold">
                Completed
              </td>
              <td class="border border-mytheme-gold px-4 py-2">$120.50</td>
              <td class="border border-mytheme-gold px-4 py-2 text-mytheme-crimson">
                Paid
              </td>
              <td class="border border-mytheme-gold px-4 py-2">2024-11-25</td>
            </tr>
            <tr class="text-center hover:bg-mytheme-silver">
              <td class="border border-mytheme-gold px-4 py-2">67890</td>
              <td class="border border-mytheme-gold px-4 py-2">User456</td>
              <td class="border border-mytheme-gold px-4 py-2 text-mytheme-crimson">
                Cancelled
              </td>
              <td class="border border-mytheme-gold px-4 py-2">$80.00</td>
              <td class="border border-mytheme-gold px-4 py-2 text-mytheme-silver">
                Unpaid
              </td>
              <td class="border border-mytheme-gold px-4 py-2">2024-11-24</td>
            </tr>
            <tr class="text-center hover:bg-mytheme-silver">
              <td class="border border-mytheme-gold px-4 py-2">11223</td>
              <td class="border border-mytheme-gold px-4 py-2">User789</td>
              <td class="border border-mytheme-gold px-4 py-2 text-mytheme-white">
                Pending
              </td>
              <td class="border border-mytheme-gold px-4 py-2">$150.75</td>
              <td class="border border-mytheme-gold px-4 py-2 text-mytheme-gold">
                Pending
              </td>
              <td class="border border-mytheme-gold px-4 py-2">2024-11-23</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
        </div>
    );
};

export default History;