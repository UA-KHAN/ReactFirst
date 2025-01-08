import React, {useState} from "react";

export default function TextForm(props){
    
    const [text, setText] = useState('Enter Your Text Here')

    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handlecapitalClick = () =>{
        function newText(sentence) {
            return sentence
              .split(' ')  // Split the sentence into words
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // Capitalize first letter, make the rest lowercase
              .join(' ');  // Join the words back together with spaces
          }
        setText(newText)
    }

    const handleClearClick = () =>{
        let newText = ''
        setText(newText)
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    return(
        <>
            <div className="container my-3">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handlecapitalClick}>Capitalized Case</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container mt-4">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                {/* <table className="table container border border-2 border-info-subtle w-25">
                    <thead>
                        <tr>
                            <th scope="col"> {text.split(" ").length} Words</th>
                        </tr>
                    </thead>
                    <tbody>                                         ////////////If you want to show the data in a Table
                        <tr>
                            <th scope="row">{text.length} Charecters</th>
                        </tr>
                        <tr>
                        <th scope="row">{0.008 * text.split(" ").length} Minutes read</th>
                        </tr>
                    </tbody>
                </table> */}
            </div>
            <div className="container mt-4">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}