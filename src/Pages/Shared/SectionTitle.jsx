import React from "react";

const SectionTitle = ({ title = "section-title" }) => {
  return (
    <div className={`text-4xl font-bold text-center`}>
      <p className="gradient-text">{title}</p>
    </div>
  );
};

export default SectionTitle;
