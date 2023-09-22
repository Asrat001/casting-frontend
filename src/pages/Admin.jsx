import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-blue-950">
        <ul className="p-4">
          <li className="mb-2">
            <Link to="/admin" className="text-blue-500 hover:text-blue-700">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/usermanagment"
              className="text-blue-500 hover:text-blue-700"
            >
              User Management
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              register
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">total casts</h3>
            <p className="text-gray-600">1000</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">total men casts</h3>
            <p className="text-gray-600">1000</p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">total female casts</h3>
            <p className="text-gray-600">1000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;