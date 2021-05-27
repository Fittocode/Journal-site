import React, { useState } from 'react'
// style 
import styled from 'styled-components'
// components
import Subentry from '../components/Subentry'
import NewEntry from '../components/NewEntry'

const Entry = ({ title, date, wordCount }) => {

    const [text, setText] = useState('');
    const [submittedText, setSubText] = useState('')
    return (
        <StyledEntry>
            <StyledFirstRow>
                <h1>{title} </h1>
                <span>{wordCount} words</span>
            </StyledFirstRow>
            <StyledSubentry>
                <Subentry date={date} tags={'#moving'} subWordCount={24} text={`I've been thinking about moving to Japan again. I don't know if it's a good idea or not, but it's been on my mind...`} />
                <Subentry date={date} tags={'#moving'} subWordCount={24} text={`I've been thinking about moving to Japan again. I don't know if it's a good idea or not, but it's been on my mind...`} />
            </StyledSubentry>
            <NewEntry text={text} setText={setText} submittedText={submittedText} setSubText={setSubText} />
        </StyledEntry>
    )
}

const StyledEntry = styled.div`
    padding-top: 1rem;
    margin-right: 5%;
    margin-left: 20%;

`

const StyledFirstRow = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledSubentry = styled.div`
   padding-top: 1rem;  
`

export default Entry