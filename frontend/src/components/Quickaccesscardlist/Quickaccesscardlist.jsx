import React from 'react';
import QuickAccessCard from '../Quickaccesscard/Quickaccesscard';
import './Quickaccesscardlist.css';

const QuickAccessCardList = ({ cards }) => {
  return (
    <div className="quick-access-card-list">
      <h1 className="quick-access-header">Quick Access</h1>
      <div className="quick-access-container">
        {cards.map((card, index) => (
          <QuickAccessCard key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default QuickAccessCardList;