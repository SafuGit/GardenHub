import React from 'react';

const WhyUsCard = ({data}) => {
  return (
    <div className="card card-border bg-base-100 w-[90%]">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold underline">{data.title}</h2>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default WhyUsCard;