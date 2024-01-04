import React from 'react'
import colorNames from 'colornames'
const Input = ({colorvalue,setcolorvalue,sethexvalue,isdarkcolor,setisdarkcolor}) => {
  return (
    <form className='form' onSubmit={(e)=>e.preventDefault()}>
        <input 
        className='input'
        type="text"
        required
        placeholder='Enter your requried color'
        autoFocus
        value={colorvalue}
        onChange={(e)=>{
            setcolorvalue(e.target.value)
            sethexvalue(colorNames(e.target.value))
        }}
         /><br/>
         <button
         type='button'
         onClick={()=>setisdarkcolor(!isdarkcolor)}
         >Toggle Text Color</button>
    </form>
  )
}

export default Input