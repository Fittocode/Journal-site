import React from 'react'
// style 
import styled from 'styled-components'

const LibraryEntry = ({ title, wordCount, date, firstTags, firstWords }) => {
    return (
        <StyledLibraryEntry>
            <StyledFirstLine>
                <h3>{title}</h3>
                <h4>{wordCount} words</h4>
            </StyledFirstLine>
            <p>created {date}</p>
            <StyledLine></StyledLine>
            <StyledTags>{firstTags}</StyledTags>
            <p>{firstWords}</p>
        </StyledLibraryEntry>
    )
}

const StyledLine = styled.hr`
    width: 100%;
`
const StyledLibraryEntry = styled.div`
    margin: .5rem .5rem .5rem;
    padding: 1rem 1rem 1rem;
    width: 17rem;
    background-color: white;
    border-radius: .5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
`

const StyledFirstLine = styled.div`
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    h3, h4{
        font-family: 'Nunito', sans-serif;
        font-weight: 300;
    }
`
const StyledTags = styled.p`
    color: #1EA48C;
`

export default LibraryEntry