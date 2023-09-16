'use client'

import { useState, useEffect, useRef } from "react"
import '../app/globals.css'

const Canvas = () => {
   
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState()
   

    useEffect((e) => {
        
        let elem = document.getElementById('graph');
        const ctx = canvasRef.current.getContext("2d");
        let positionx = 50;
        let positiony = 50;

        
        
        for(let i = 10; i < 500; i+=65 ){
            for(let j = 10; j < 500; j+=65 ){
                ctx.beginPath();
                ctx.fillRect(j, i, 40, 40); // рисуем квадрат
                ctx.fillStyle = "#ffffff"; 
                ctx.fill();
                ctx.stroke();
            }
        }

        elem.addEventListener('click', (e)=> {
            let localX = e.clientX - 10
            let localY = 10
            ctx.beginPath();
            ctx.fillRect(localX, localY, 40, 40); // рисуем квадрат
            ctx.fillStyle = "#f01212"; 
            ctx.fill();
            ctx.stroke();
            console.log(e)
            console.log('worked')
           
        })
    }, [canvasRef]);

    
    return(

        <canvas ref={canvasRef} id="graph" width="500" height="500"></canvas>  
    )

}
export {Canvas}