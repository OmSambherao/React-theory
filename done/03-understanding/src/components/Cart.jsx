import React from 'react'

function Cart(props) {
  return (
    <div className='cart'>
        
        <img src={props.img} alt="" srcset="" />

        <h1>{props.user} </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, saepe!</p>
        <button>view profile</button>
    </div>
  )
}

export default Cart
