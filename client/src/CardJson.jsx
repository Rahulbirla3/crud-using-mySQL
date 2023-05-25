import React from 'react';

const CardJson = ({ val, er }) => {
  console.log(val, er);
  return (
    <>
      <h1>{val.title}</h1>
    </>
  )
}

export default CardJson;