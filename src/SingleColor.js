import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,type,hexColor,index}) => {
  const[alert,setAlert]=useState(false);
  const backColor = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const hexValue= `#${hexColor}`;

  const clipbordHandle =()=>{
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false);
    },1000);
    return ()=>clearTimeout(timeout);
  },[alert]);
  return (
    <article className={`color ${index > 10 && 'color-light'}`}
    style={{background:`rgb(${backColor})`}}
    onClick={clipbordHandle}
    >
      <p className="percent-value" style={{color:`${type==="shade"? "var(--white)":"var(--black)"}`}}>
        {weight}%
      </p>
      <p className="color-value" style={{color:`${type==="shade"? "var(--white)":"var(--black)"}`}}>
        {hexValue}
      </p>
      {alert &&
      <p className={`alert ${index > 10 && 'alert-light'}`} style={{color:`${type==="shade"? "var(--white)":"var(--black)"}`}}>
        Copied to clipbord
      </p>}
    </article>
  )
}

export default SingleColor
