
'use client'
import { useEffect, useState } from 'react'
import '../app/globals.css'
import {Place } from '@/components/place'
const Cinema = ({count}) => {

    return(
        <div className="section">
           {[...Array(200)].map((x, i) =>
                <Place key={i} props={i}/> 
            )}
        </div>
    )

}
export {Cinema}