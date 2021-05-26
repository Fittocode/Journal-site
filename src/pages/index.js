// Step 1: Import React
import * as React from 'react'
// components
import GlobalStyle from '../components/GlobalStyle'
import Navbar from '../components/Navbar'
import EntriesLibrary from '../components/Library'
import Entry from '../components/Entry'

const IndexPage = () => {
  return (
    <div>
      <GlobalStyle />

      <Navbar />
      <EntriesLibrary title={'Recent Entries'} />
      <Entry title={'Moving to Japan'} date={'5/26/21'} wordCount={50} />

    </div>

  )
}


export default IndexPage