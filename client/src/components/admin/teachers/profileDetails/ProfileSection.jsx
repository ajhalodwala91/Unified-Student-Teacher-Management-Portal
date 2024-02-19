import React from 'react';

function ProfileSection({ icon, name, section }) {
  return (
    <div className='profileSection'>
      <div className="sectionTitle">
        <span className="sectionIcon">{icon}
        </span>
        <span className="sectionName">{name}</span>
      </div>
      <div className="sectionContent">
        {section}
      </div>
    </div>
  )
}

export default ProfileSection;