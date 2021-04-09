import React from 'react'
import ReactDOM from 'react-dom'

import {BountyContextProvider2} from './context2'

import App from './App'
const root = document.getElementById('root')


ReactDOM.render(
    <BountyContextProvider2>
        <App />
    </BountyContextProvider2>,
    root
)