import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      <div className="">
        <div className="bg-white  shadow-lg">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">total casts</h3>
            <p className="text-gray-600">1000</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-white  shadow-lg">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">total men casts</h3>
            <p className="text-gray-600">1000</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-white  shadow-lg">
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