import React from 'react';
import './Profile.css';
import ProfileCard from './profileCard/ProfileCard';
import ProfileDetails from './profileDetails/ProfileDetails';

function Profile() {
  return (
    <div className='profile'>
      <ProfileCard userAddress="Suite 894 749 Edythe Stravenue, Port Andymouth, LA 31901"/>
      <ProfileDetails />
    </div>
  )
}

export default Profile;