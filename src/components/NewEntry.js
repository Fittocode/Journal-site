import React from 'react'
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

const NewEntry = ({ text, setText, submittedText, setSubText }) => {

    const handleChange = (value) => {
        setText({ text: value });
    }

    const handleSubmit = () => {
        setSubText()
    }

    console.log(text)

    return (
        <div>
            <ReactQuill value={text}
                onChange={() => handleChange} />
            <button type="submit" value={submittedText} >Submit</button>
        </div>
    )
}

export default NewEntry