import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';
const Cart = () => {
    const data = [
        {
            id: "1",
            img: "https://images.unsplash.com/photo-1566678124698-45c71a49eb0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmVldHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            img2: "https://images.unsplash.com/photo-1586102901518-ca0f178acb5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHN0cmVldHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            isNew: true,
            title: "ladki",
            oldPrice: 19,
            price: 12,

        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            img2: "https://images.unsplash.com/photo-1584897149326-536f40649b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3JvcCUyMHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
            isNew: true,
            title: "crop top",
            oldPrice: 19,
            price: 12,
        }]
    return (
        <div className='cart'>
            <h1>Product in your cart</h1>
            {data?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlineIcon className='delete' />
                </div>

            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$129</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset cart </span>
        </div>
    )
}

export default Cart
