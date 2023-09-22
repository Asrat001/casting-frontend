import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Usermanagment = () => {
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
              register a cast
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-4">User Management</h2>
          <div className="flex items-center">
            <select className="border border-gray-300 rounded ... ... px-4 py-2 focus:outline-none">
              <option value="">All Categories</option>
              <option value="">skin tone</option>
              <option value="category2">sex</option>
              <option value="category3">catagory</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded ... ... px-4 py-2 focus:outline-none ml-2"
            />
            <button className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded ml-2">
              Search
            </button>
          </div>

          <table className="min-w-full divide-y divide-gray-200 m-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  catagory
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  sex
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                  skintone
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Delete</span>
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">status</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Asrat Adane
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    asratadane@gmail.com
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">artist</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">male</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">brown</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <select className="border border-gray-300 rounded ... ... px-4 py-2 focus:outline-none">
                    <option value="">inactive</option>
                    <option value="">active</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Usermanagment;
