import React from 'react'
// style
import styled from 'styled-components'

const Subentry = ({ date, tags, subWordCount }) => {
    return (
        <div>
            <StyledFirstRow>
                <span>{date}</span>
                <span>{tags}</span>
                <span>{subWordCount} words</span>
            </StyledFirstRow>
        </div>
    )
}

const StyledFirstRow = styled.div`
    display: flex;
    align-content: space-between;
`

export default Subentry