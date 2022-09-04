
import React from 'react'

const Menu = ({items}) => {
  return (
    <div className="container ">
    <div className="row justify-content-center">
     {items.map((menuItem)=>{
     const {id,title,img,desc,price} =menuItem;
     return(
    <>  <div className="card col-5">
    <img className="card-img-top" src={img} alt="Card image cap" />
    <div className="card-body pt-3">
      <span className="card-title h4">{title} </span>
      <span className='col text-primary price'>${price}</span>
      <p className="">{desc}</p>

    </div>
  </div>
    </>
     )
     })}
    </div>
  </div>
  )
}

export default Menu


