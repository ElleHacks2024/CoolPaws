import React from 'react';
import './Parkcard.css';


const Parkcard = ({ name, rating, openTime, image }) => {
    
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <span className="badge bg-success">{rating} Stars</span>
        </p>
        <p className="card-text">Open until {openTime}</p>
        <a href="#" className="btn btn-primary">Go now</a>
      </div>
    </div>
  );
};
export default Parkcard;