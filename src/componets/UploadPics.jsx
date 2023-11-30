import React, { useState } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import {BsFillCloudUploadFill} from 'react-icons/bs'
const UploadPics = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'fkmrpghj'); // Replace with your Cloudinary upload preset

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dvflguwig/image/upload', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      setImage(data.secure_url);
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  return (
   
<div>
      <div className='w-[150px] mx-auto my-4 h-[150px] flex justify-center items-center p-4 border-[4px] border-orange-400 rounded-full'>
        {!image && (
          <label htmlFor="upload-input" className='flex flex-col justify-center items-center'>
            <BsFillCloudUploadFill className='text-orange-400 hover:text-slate-900 w-10 h-10'/>
            <p className='text-slate-900'>Upload your picture</p>
            <input id="upload-input" type="file" onChange={handleImageUpload} style={{ display: 'none' }} />
          </label>
        )}
        {image && <img src={image} alt="Uploaded" className="w-full h-full rounded-full" />}
      </div>
    </div>
    
  );
};



export default UploadPics