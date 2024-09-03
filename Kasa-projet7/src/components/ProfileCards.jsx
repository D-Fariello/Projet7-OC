import React from 'react';
import { useNavigate } from "react-router-dom";

const ProfileCards = ({data}) => {
  
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/Logement/${data.id}`);
      };

    return (
        <div className="profile-cards" onClick={handleClick}>
            <img className="home-images" src={data.cover} alt="Cover Image" />
            <div className="content-profile-card">
            <p> {data?.title} </p>
            </div>
        </div>
    );
};

export default ProfileCards;