import React from 'react';
const handleEditProfile = () => {
    // Handle edit profile action
    console.log('Edit profile clicked');
  };
const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 mt-20">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-4">
        <div className="flex items-center mb-4">
          <img
            src="https://res.cloudinary.com/diogyja1g/image/upload/v1693222355/9_v0if8x.jpg"
            alt="Profile Picture"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">Netsanet</h1>
            <p className="text-gray-600">Actor | Model | Musician</p>
          </div>
        </div>
        <div className="mb-6 mt-9 space-y-2">
          <h2 className="text-lg font-bold mb-2">Personal Information</h2>
          <p><span className="font-semibold">Language:</span> English, Amharic</p>
          <p><span className="font-semibold">Phone:</span> +251941390824</p>
          <p><span className="font-semibold">Age:</span> 30</p>
          <p><span className="font-semibold">Skin Tone:</span> black</p>
          <p><span className="font-semibold">Nationality:</span> Ethiopian</p>
          <p><span className="font-semibold">Address:</span>  4 killo, Addis Ababa, Ethiopia</p>
        </div>
        <div className="mb-6 mt-9 space-y-2">
          <h2 className="text-lg font-bold mb-2">Professional Information</h2>
          <p><span className="font-semibold">Uploaded Pictures:</span> 5</p>
          <p><span className="font-semibold">City:</span> Addis Ababa</p>
          <p><span className="font-semibold">Education:</span> Bachelor's in Performing Arts</p>
          <p><span className="font-semibold">Certificates:</span> Acting, Modeling</p>
          <p><span className="font-semibold">Experience:</span> 8 years in acting, 5 years in modeling</p>
          <p><span className="font-semibold">Talents:</span> Singing, Dancing, Martial Arts</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Post Pictures</h2>
          <div className="grid grid-cols-3 gap-4">
            <img src="https://res.cloudinary.com/diogyja1g/image/upload/v1693222355/9_v0if8x.jpg" alt="Post 1" className="rounded-md" />
            <img src="https://res.cloudinary.com/diogyja1g/image/upload/v1693222355/9_v0if8x.jpg" alt="Post 2" className="rounded-md" />
            <img src="https://res.cloudinary.com/diogyja1g/image/upload/v1693222355/9_v0if8x.jpg" alt="Post 3" className="rounded-md" />
         
          </div>
        </div>
        <button onClick={handleEditProfile} className="bg-orange-500 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full mt-5">Edit Profile</button>     
         </div>
     
    </div>
  );
};

export default ProfilePage;