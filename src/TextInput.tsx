import './TextInput.css'
import React from 'react'

type TextInputProps = {
  type: string;
  placeholder: string;
  id: string;
  handle?:() => void
  ref:React.Ref<HTMLInputElement>
}

function TextInput( {ref,handle,...props}:TextInputProps ) {
  return (
    <input className="textbox bottom-space" ref={ref} onBlur={handle} {...props} />
  );
};

export default TextInput;