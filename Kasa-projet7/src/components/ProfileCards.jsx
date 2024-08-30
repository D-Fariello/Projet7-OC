import React from 'react';

const ProfileCards = ({data}) => {
  
    return (
        <div className="profile-cards">
            <img className="home-images" src={data.cover}/>
            <div className="content-profile-card">
            <p> {data?.title} </p>
            </div>
        </div>
    );
};

export default ProfileCards;