import React, {useContext, useState} from 'react'
import {BountyContext2} from '../context2'
import Form from './Form'


export default function NewBounty(props){
    const c = useContext(BountyContext2)
    const [ editTog, setEditTog ] = useState(false)

    return(
        <div className="bountyDisplay">
            { !editTog ?
                <>
                    <h3>{props.firstName} {props.lastName}</h3>
                    <p>Target is alive: {props.living? 'True' : 'False'}</p>
                    <p>Faction: {props.faction}</p>
                    <p>Bounty Amount: {props.bountyAmount}</p>
                    <p> Bounty ID: {props._id} </p>
                    <button 
                        className="deleteBtn" 
                        onClick={() => c.handleDelete(props._id)}>Delete</button>
                    <button 
                        className="toggleEditBtn"
                        onClick={() => setEditTog(prevTog => !prevTog)}
                    >Edit</button>
                </>
             : 
                <>
                    <div className="edit-form">
                        <Form 
                            editTog={editTog}
                        />
                    </div>

                    <button className="edit-button" onClick={() => c.handleEdit(c.bountyData, props._id)}>Submit Edit</button>
                    {console.log(c.bountyData)}

                    <button
                        onClick={() => setEditTog(prevTog => !prevTog)}
                    >Close</button>
                </>

            }   
        </div>
    )
}