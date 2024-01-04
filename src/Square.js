import React from 'react'

const Square = ({colorvalue,hexvalue,isdarkcolor}) => {
  return (
    <section className='square' style={{backgroundColor:colorvalue ,color:isdarkcolor ?"#000": "#fff" }}>
         
         
         <p>{colorvalue ? colorvalue:"empty value"}</p>
         <p>{hexvalue ? hexvalue:null}</p>
    </section>
  )
}
Square.defaultProps={
    colorvalue:"empty value"
}
export default Square