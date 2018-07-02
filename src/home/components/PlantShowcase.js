import React from 'react'

export default ({ data }) => (
  <div>
    <p>{data.name}</p>
    <img src={data.image} alt={data.name} />
    <p>{data.description}</p>
  </div>
)
