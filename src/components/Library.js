import React from 'react'
// style
import styled from 'styled-components'

// components
import LibraryEntry from './LibraryEntry'

const EntriesLibrary = ({ title }) => {
    return (
        <StyledLibrary>
            <h1>{title}</h1>
            <LibraryEntry title={'Moving to Japan'} wordCount={145} date={"5/25/21"} firstTags={['#moving ', '#Japan ', '#uncertainty ']} firstWords={`I've been thinking about moving to Japan again. I don't know if it's a good idea or not, but it's been on my mind...`} />
            <LibraryEntry title={'Moving to Europe'} wordCount={200} date={"5/25/21"} firstTags={['#moving ', '#Japan ', '#uncertainty ']} firstWords={`I've been thinking about moving to Japan again. I don't know if it's a good idea or not, but it's been on my mind...`} />
        </StyledLibrary>
    )
}

const StyledLibrary = styled.div`
    position: fixed;
    background-color: #C4C4C4;
    padding-top: 1rem;
    width: 21rem;
    height: 100%;
    overflow: scroll;
    h1 {
        text-align: center;
    }
`

export default EntriesLibrary