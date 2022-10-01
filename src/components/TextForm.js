import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked!");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text is cleared", "success");
    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
   
    const handleOnChange = (event) => {
        // console.log("On Change!");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text";   wrong way to change the state
    // setText("new text");    //Correct way to change the state
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} id='myBox' rows='8'></textarea>
            </div>
            <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>Copy To Clipboard</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} word and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
