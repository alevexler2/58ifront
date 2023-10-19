import React from 'react'

const InputForm = ({label, type}) => {
  return (
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">{label}</label>
      <input type={type} className="form-control" id="exampleInputEmail1"        aria-describedby="emailHelp"/>
    </div>
  )
}

export default InputForm