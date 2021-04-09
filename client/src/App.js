import React, { useContext } from 'react'

import Form from './components/Form'
import NewBounty from './components/NewBounty'
import {BountyContext2} from './context2'

export default function App(){
    const c = useContext(BountyContext2)
    return(
        <div className="main">
            <h1 className='title'>Boba's Bounties</h1>
            <Form />
            {c.bounties.length > 0? c.bounties.map(bounty => <NewBounty 
                {...bounty} 
                key={bounty._id} 
            />)
                : <div>error 404</div>}
        </div>
    )
}