import React, { useState } from 'react';


export default function NewTweet() {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        //add to redux
        console.log(text)
    }
    const handleChangeText = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <h3 className='center'>Compose new tweet</h3>
            <form className='new-tweet' onSubmit={handleSubmit}>
                <textarea onChange={handleChangeText} placeholder='type a tweet'/>
                <input type='submit' value='upload'/>
            </form>
        </div>
    )
}
