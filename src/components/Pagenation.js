import React from 'react'

export const Pagenation = ({postPerPage,totalPost,pagenate}) => {   
    const pageNumber = [];
    for(let i=1; i <= Math.ceil(totalPost/postPerPage); i++){
        pageNumber.push(i)
    }   
    
    return (
        <nav>
           <ul className="pagenation">
           { pageNumber.map(num=>{
               return <li key={num}><a onClick={()=>pagenate(num)} href="#">{num}</a></li>

            })
}
           </ul>

            
        </nav>
    )
}