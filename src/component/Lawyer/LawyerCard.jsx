import React from "react";

const LawyerCard = ({ lawyer }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    totalPatient,
    hospital,
  } = lawyer;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} className="w-full" alt="" />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>
    </div>
  );
};

export default LawyerCard;
