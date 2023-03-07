import React from 'react'
import Card from '../card/Card'
import "./List.scss"



const List = () => {
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
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title: "full Skirt",
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3RyZWV0d2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            img2: "https://images.unsplash.com/photo-1614975058769-97b080519c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHN0cmVldHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            title: "Jacket",
            oldPrice: 19,
            price: 12,
        }
    ]
    return (
        <div className='list'>
            {data.map((item) => <Card item={item} key={item.id} />)}


        </div>
    )
}

export default List
