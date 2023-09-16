
import { useState, useEffect, useRef } from "react"

import '../app/globals.css'

const Place = ({props}) => {
   
    const [active, setActive] = useState(false)
    function handleActive() {
        setActive((current) => !current)
        console.log(active)
        
    }
    

    return(
        <siction>

            <div 
            className="block" 
            id="block" 
            onClick={handleActive} 
            style={{backgroundColor: active == true ? '#70ec0bf3' : '#fff'}}> {props} </div>
           
        </siction>
        
            
    )
}
export { Place }