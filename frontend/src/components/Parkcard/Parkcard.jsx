import React, { useEffect } from 'react';
import './Parkcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree,faDroplet,faBugs} from '@fortawesome/free-solid-svg-icons';


const Parkcard = ({ name, rating, openTime, image, features =[] }) => {
  
  const iconMap = {
    tree: faTree,
    droplet: faDroplet,
    bugs: faBugs,
  };
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <span className="badge bg-success">{rating} Stars</span>
        </p>
        <p className="card-text">Open until {openTime}</p>
        <a href="#" className="btn btn-primary">Go now</a>
        <div className="icon-text-container">
          {features.map((feature, index) => (
            <div key={index} className="icon-text-item card-text">
              <FontAwesomeIcon icon={iconMap[feature.icon]} />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
export default Parkcard;