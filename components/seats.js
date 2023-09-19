'use client'
import { useEffect, useState } from 'react'
import '../app/globals.css'
const Seats = ({props}) => {

    let [active, setActive] = useState(0)
    
    const handleClick = (event) => {
        console.log(event.detail);
        switch (event.detail) {
          case 1: {
            setActive(active += 1)
            console.log(active);
            break;
          }
          case 2: {
            setActive(active+= 1);
            console.log(active);
            break;
          }
          default: {
            break;
          }
        }
      };
    return(
        <div>
            {
                active == 0 ? <button style={{backgroundColor: 'white'}} className="block" onClick={handleClick}></button> : ""
                || active == 1 ? <button style={{backgroundColor: 'orange'}} className="block" onClick={handleClick}>!</button> : <button className="block" onClick={handleClick}>выбрано</button>
                || active == 2  ? <button style={{backgroundColor: 'green'}} className="block" onClick={handleClick}>{props}</button> : <button className="block" onClick={handleClick}>fff</button>
            }
        </div>
        
    )
    
}

export { Seats } 