import React from 'react'
// style 
import styled from 'styled-components'
// components
import Subentry from '../components/Subentry'

const Entry = ({ title, date, wordCount }) => {
    return (
        <StyledEntry>
            <h1>{title} </h1>
            <StyledFirstRow>
                <p>Created {date}</p>
                <p>{wordCount} words</p>
            </StyledFirstRow>
            <hr />
            <StyledSubentry>
                <Subentry date={date} tags={'#moving'} subWordCount={24} />
            </StyledSubentry>
        </StyledEntry>
    )
}

const StyledEntry = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 5%;
    margin-left: 20%;

`

const StyledFirstRow = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledSubentry = styled.div`

`

export default Entry