import React from 'react';
import QuickAccessCard from '../Quickaccesscard/Quickaccesscard';
import './Quickaccesscardlist.css';

const QuickAccessCardList = ({ cards }) => {
  return (
    <div className="quick-access-card-list">
      <div className="quick-access-header">Quick Access</div>
      <div className="quick-access-container">
        {cards.map((card, index) => (
          <QuickAccessCard key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default QuickAccessCardList;