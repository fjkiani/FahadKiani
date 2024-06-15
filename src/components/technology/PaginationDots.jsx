import React from 'react';

const PaginationDots = ({ technologies, selectedTech, changeSelectedTech, viewAll, setViewAll }) => {
  return (
    <div className="technology__pagination-dots">
      {technologies.slice(0, viewAll ? technologies.length : 3).map((technology, index) => (
        <div
          key={index}
          className={`technology__pagination-dots__dot ${technology.name === selectedTech ? 'technology__pagination-dots__dot--active' : ''}`}
          data-name={technology.name}
          onClick={changeSelectedTech}
        >
          {index + 1}
        </div>
      ))}
      {!viewAll && (
        <div className="technology__pagination-dots__view-all" onClick={() => setViewAll(true)}>
          View All
        </div>
      )}
    </div>
  );
};

export default PaginationDots;
