import React from "react"
<Keypad />

function Keypad (){
    return (
        <div>
            <input 
                type="password"
                onChange={() => console.log("Entering password...")} />
        </div>
    )
}

export default Keypad;