import React, { useEffect, useState } from 'react'
import '../App.css'
import { MAX, MIN } from '../Constants';

const ProgressBar = ({value=0 , onComplete = ()=>{} }) => {
    const [percent , setpercent]= useState(value);

    useEffect(()=>{
        setpercent(Math.min(MAX,Math.max(value,MIN)))

        if(value>=MAX){
            onComplete();
        }

    },[value]);


  return (
    <div className='progress'>
      <span
      style={{color: percent>49 ? "white" : "black" }}
      >{percent .toFixed()}%</span>
      <div
    //    style={{width: `${percent}%`}}
       style={{transform: `scaleX(${percent/MAX})`,
       transformOrigin:"left"
       }}
        role='progressbar'
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent.toFixed()}
       />
    </div>
  )
}

export default ProgressBar
