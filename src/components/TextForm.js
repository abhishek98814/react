
import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to upperCase", "Succeses")
  }

  const handleLowerCase=()=>{
    let txt = text.toLowerCase()
    setText(txt)
    props.showAlert("Converted to LowerCase", "Succeses")

  }

const clearText=()=>{
  let clear = " "
  setText(clear)
  props.showAlert("Text is cleared", "Succeses")

}
const information = ()=>{
  let inform= "Give Your adress and namr"
  setText(inform)
}

  const handleOnChange=(event)=>{
    setText(event.target.value)
  }

const handleCopy = () =>{
  var text = document.getElementById("myBox")
  text.select()
  text.setSelectionRange(0, 999);
  navigator.clipboard.writeText(text.value)
  props.showAlert("Copy To Clipboard", "Succeses")

}

const handleExtraSpaces = () =>{
  let newText = text.split(/[ ] +/);
  setText(newText.join(" "))
}

const [text, setText] = useState('')
  return (
    <>
    <div className='container' style={{backgroundColor: props.mode ==='dark' ? '#042743':'white'}}>
        <h1 style={{color: props.mode ==='dark' ? 'white':'black'}}>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor: props.mode ==='dark' ? 'grey':'white', color: props.mode === 'dark' ?'white':'black'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-1" onClick={handleLowerCase}>Convert to Lower Case</button>
<button className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
  <button onClick={information}>Suggestion</button>
  <button className='btn btn-primary' onClick={handleCopy}>copy</button>
  <button className='btn btn-primary' onClick={handleExtraSpaces}>r. space</button>
    
    <div className="container my-3" style={{ color:props.mode ==='dark' ? 'grey':'black'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word, {text.length} character</p>
      <p>{0.008 * text.split(" ").length} Minutes to read </p>
      <h3>Preview</h3>
     <p>{text.length>0?text:"Enter Something to preview here"}</p>
    </div>
    </div>
  </>
  )
}
