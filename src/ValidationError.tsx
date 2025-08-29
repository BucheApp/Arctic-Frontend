import './ValidationError.css'
import React from 'react';

const ValidationError = ({ ref }:{ref:React.Ref<HTMLSpanElement>}) => {
  return (
    <>
      <div>
        <span className="error" ref={ref}></span>
      </div>
    </>
  )
}

export default ValidationError