import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const[colors,setColors]=useState('');
  const[resault,setResault]=useState('');
  const[error,setError]=useState(false);
  const[list,setList]=useState(new Values("#072ac8").all(10));

  let errorMessage="";
  if(error){
    errorMessage=<div className="error-msg">
      the color is not exist
    </div>;
  }else{
    errorMessage="";
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let res = parseInt(resault);
    try{
      setError(false);
      let color= new Values(colors).all(res);
      setList(color);
    }
    catch(error){
      setError(true);
      console.log(error);
      setList([]);
    }
  }

  return (
    <>
    <section className="container">
      <h3>Color generator</h3>
      <form onSubmit={handleSubmit} action="">
        <div className="input-color">
          <label htmlFor="colors">color</label>
          <input id="colors" type="text" value={colors}
          onChange={(e)=>setColors(e.target.value)}
          placeholder="#072ac8"
          className={`${error?"error":null}`}
          />
        </div>
        <div className="input-percent">
          <label htmlFor="resault">%</label>
          <select id="resault" type="select" name="resault" value={resault}
          onChange={(e)=>setResault(e.target.value)}
          placeholder="10"
          className={`${error?"error":null}`}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
          </select>  
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
    <section className="colors">
      {errorMessage}
      {list.map((color,index)=>{
        // console.log(color);
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
      })}
    </section>
    </>
  )
}

export default App
