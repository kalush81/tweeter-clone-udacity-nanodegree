import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleAddTweet } from '../actions/tweets'

export default function NewTweet() {
    
    const [text, setText] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        //add to redux and db
        dispatch(handleAddTweet(text))
        setText('')
    }
    const handleChangeText = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <h3 className='center'>Compose new tweet</h3>
            <form className='new-tweet' onSubmit={handleSubmit}>
                <textarea className='textarea' maxLength={280} onChange={handleChangeText} placeholder='type a tweet' value={text}/>
                <button className='btn' type='submit' disabled={text === ''}>Add Tweet</button>
            </form>
        </div>
    )
}
