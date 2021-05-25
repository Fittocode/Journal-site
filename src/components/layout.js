import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
const Layout = ({ pageTitle, children }) => {

    return (
        <StyledLayout>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </StyledLayout>
    )
}

const StyledLayout = styled.div`
    margin: auto;
    font-size: 30px;
    max-width: 700px;
`

export default Layout