import React from 'react';
import "./heading.css"

const Heading = ({description, title}) => {
  return (
    <>
        <div className="heading">
            <h5>{description}</h5>
            <h2>{title}</h2>
        </div>
    </>
  )
}

export default Heading