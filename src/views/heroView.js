import React from 'react';
import Main from '../components/Main/Main'
import Nav from '../components/Nav/Nav'
import Rates from '../components/Rates/Rates'
import Wrapper from './heroViews.styles'

function App() {
    return(
        <Wrapper>
            <Nav />
            <Main />
            <Rates />
        </Wrapper>
    )
}

export default App;