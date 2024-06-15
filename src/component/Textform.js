import React,{useState} from 'react'

export default function Textform(props) {
    const[text, setText] = useState(" ");
    // text="new text" //wrong way to update here unlike js
    // setText("new text")//right way to update the text 

    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);

    }
    const handleUpClick=()=>{
        // console.log("upclick was handled" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleloClick=()=>{
        // console.log("upclick was handled" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");
    }
    const handleextraspaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed", "success");
    }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
<button className="btn btn-primary mx-2" onClick={handleextraspaces}>remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
