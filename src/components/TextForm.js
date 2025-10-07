import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("")

    const handleOnClick1 = () => {
        setText(text.toUpperCase());
    }

    const handleOnChange1 = (event) => {
        setText(event.target.value)
    }

    const handleOnClick2 = () => {
        setText(text.toLowerCase());
    }

    return (
        <div>
            <div>
                <h1>This Web Is Used For Lower to Upper And Upper to Lower Text</h1>
                <div>
                    <h4>{props.heading}</h4>
                    <div className='mb-3'>
                        <textarea className='form-control' name="text" id="myBox" rows="6" value={text} onChange={handleOnChange1} ></textarea>
                    </div>
                    <button className='btn btn-primary' onClick={handleOnClick1}>Upper Case</button>
                    <button className='btn btn-primary mx-2' onClick={handleOnClick2}>Lower Case</button>
                </div>
            </div>
            <div className='container mt-2'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read this</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
