// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-3/12 mx-auto my-8">
      <p className="py-4  border-b-4  text-center text-yellow-400">{heading}</p>
      <h1 className="py-4  border-b-4 text-center text-4xl">{subHeading}</h1>
    </div>
  );
};

export default SectionTitle;
