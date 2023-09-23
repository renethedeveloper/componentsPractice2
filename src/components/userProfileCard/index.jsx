import React, { useState } from 'react';
import './index.css';

const UserProfileCard = () => {
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState('');
  const [userBio, setUserBio] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setUserName('');
    setUserImage('');
    setUserBio('');
    setClicked(true);

   
  };

  return (
    <div>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        value={userImage}
        onChange={(e) => setUserImage(e.target.value)}
        type="text"
        placeholder="Image URL"
      />
      <input
        value={userBio}
        onChange={(e) => setUserBio(e.target.value)}
        type="text"
        placeholder="Bio"
      />
      <button onClick={handleClick}>Update</button>
      {clicked ? (
        <div>
          <h2>User Name: {userName}</h2>
          <img className="image" src={userImage} alt={userImage} />
          <h2>User Bio: {userBio}</h2>
        </div>
      ) : null}
    </div>
  );
};

export default UserProfileCard;
