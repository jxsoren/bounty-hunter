
import React, {useContext} from 'react'
import {BountyContext2} from '../context2'

export default function Form(props) {
    const c = useContext(BountyContext2)

    return (
        <div className="formParent">
            <form onSubmit={c.handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    onChange={c.handleChange} 
                    placeholder="First Name"
                    value={c.bountyData.firstName}
                    className="inputText"
                    required
                />

                <input
                    type="text"
                    name="lastName"
                    onChange={c.handleChange} 
                    placeholder="Last Name"
                    value={c.bountyData.lastName}
                    className="inputText"
                />

                <input
                    type="number"
                    name="bountyAmount"
                    onChange={c.handleChange} 
                    value={c.bountyData.bountyAmount}
                    placeholder="Bounty Amount (credits)"
                    className="inputText"
                />
                    
                <p className="aliveTitle">Is target alive?</p>
                <div className="radioParent">
                    <input
                        type="radio"
                        name="isAlive"
                        id="true"
                        checked={c.bountyData.selectedOption === "true"}
                        value={true} 
                        onChange={c.onChangeValue}
                        className="radio"
                    /> True

                    <input
                        type="radio"
                        name="isAlive"
                        id="false"
                        checked={c.bountyData.selectedOption === "false"}
                        value={false} 
                        onChange={c.onChangeValue}
                        className="radio"
                    /> False
                </div>
                <br />

                    <label for="faction">Target's Faction: </label>
                    <br />
                        <select id="faction" onChange={c.handleSelect} value={c.bountyData.faction}>
                            <option value="New Jedi Order">New Jedi Order</option>
                            <option value="Separatists">Separatists</option>
                            <option value="Sith Empire">Sith Empire</option>
                            <option value="Rebel Alliance">Rebel Alliance</option>
                            <option value="New Republic">New Republic</option>
                            <option value="Galactic Republic">Galactic Republic</option>
                            <option value="Old Republic">Old Republic</option>
                            <option value="Mandalorians">Mandalorians</option>
                            <option value="Black Sun">Black Sun</option>
                            <option value="Galactic Senate">Galactic Senate</option>
                            <option value="Galactic Empire">Galactic Empire</option>
                            <option value="Jedi Order">Jedi Order</option>
                        </select>

                    <br />

                    { !props.editTog ? 
                        <button className="submitButton" onClick={c.handleSubmit}>Submit</button>
                     :
                        <></>
                    }
            </form>
        </div>
    )
}