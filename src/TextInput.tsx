import './TextInput.css'

function TextInput({id = "", type = "text", placeholder = ""}) {
  return (
    <>
      <input className="textbox bottom-space" id={id} type={type} placeholder={placeholder} />
    </>
  )
}

export default TextInput