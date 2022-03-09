import React from 'react';

const Wildflower = (props) => {
  const {id, common_name, scientific_name, description} = props
  return(
    <div className='border'>
      <h1>{common_name}</h1>
      <p>Scientific name: {scientific_name}</p>
      <p>Description: {description}</p>
      <p>ID:{id}</p>
    </div>
  )
}

export default Wildflower; 