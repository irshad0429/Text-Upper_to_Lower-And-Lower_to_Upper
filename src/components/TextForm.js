import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter text here")

    const handleOnClick1 = () => {
        setText(text.toUpperCase());
    }

    const handleOnChange1 = (event) => {
        setText(event.target.value)
    }

    const [text1, setText1] = useState("Enter text here")

    const handleOnClick2 = () => {
        setText1(text.toLowerCase());
    }

    const handleOnChange2 = (event) => {
        setText1(event.target.value)
    }
    
    return (
        <div>

            <div>
                <h1>This Section Is Used For Lower to Upper Text</h1>
                <div>
                    <h4>{props.heading}</h4>
                    <div className='mb-3'>
                        <textarea className='form-control' name="text" id="myBox" rows="6" value={text} onChange={handleOnChange1} ></textarea>
                    </div>
                    <button className='btn btn-primary' onClick={handleOnClick1}>Change</button>
                </div>
            </div>

            <div>
                <h1>This Section Is Used For Upper to Lower Text</h1>
                <div>
                    <h4>{props.heading}</h4>
                    <div className='mb-3'>
                        <textarea className='form-control' name="text" id="myBox" rows="6" value={text1} onChange={handleOnChange2} ></textarea>
                    </div>
                    <button className='btn btn-primary' onClick={handleOnClick2}>Change</button>
                </div>
            </div>
        </div>
    )
}
