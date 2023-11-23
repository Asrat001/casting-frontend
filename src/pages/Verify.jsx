import React, { useState } from 'react';
import axios from 'axios';
import { server } from '../server';
const VerifyOTP = () => {
  const [otp, setOTP] = useState('');

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${server}/use/verify`, { otp });
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error.response.data); // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={handleOTPChange}
        className="border border-gray-300 rounded px-4 py-2 w-full mt-40 mb-4"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-48"
      >
        Verify OTP
      </button>
    </form>
  );
};

export default VerifyOTP;
