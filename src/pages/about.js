// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
// Step 2: Define your component
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site!</p>
        </Layout>
    )
}

// Step 3: Export your component
export default AboutPage