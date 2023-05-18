import React from 'react'

const SectionTitle = ({title='section-title'}) => {
  return (
    <div className={`text-4xl font-bold gradient-text text-center`}>{title}</div>
  );
}

export default SectionTitle