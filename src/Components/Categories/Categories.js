import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'
const Categories = () => {
    return (
        <div className='categories'>
            <div className="grid">
                <div className="grid-item">
                    <img src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZhc2lvbiUyMHNhbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="grid-item"><img src="https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaW9uJTIwd29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <button>
                        <Link className='link' to="/products/2">Women</Link>
                    </button></div>
                <div className="grid-item"><img src="https://images.unsplash.com/photo-1616362081749-2883d4b26781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <button>
                        <Link className='link' to="/products/3">New-season</Link>
                    </button></div>
                <div className="grid-item"><img src="https://images.unsplash.com/photo-1651525390850-e771f2c2a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaW9uJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <button>
                        <Link className='link' to="/products/4">Men</Link>
                    </button></div>
                <div className="grid-item"><img src="https://plus.unsplash.com/premium_photo-1661645440995-de46bfd972bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFjY2Vzc29yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <button>
                        <Link className='link' to="/products/5">Accessories</Link>
                    </button></div>
                <div className="grid-item"><img src="https://images.unsplash.com/photo-1570464197285-9949814674a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNob2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /><button>
                    <Link className='link' to="/products/6">Shoes</Link>
                </button></div>
            </div>
        </div>
    )
}

export default Categories
