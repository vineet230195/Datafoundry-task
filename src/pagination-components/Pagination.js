import React from 'react'

function Pagination(props){

    const pageNumbers=[]

        for(let i=1;i<=Math.ceil(props.totalPosts/props.postPerPage);i++){
            pageNumbers.push(i)
        }

    return(
        <div>
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map(num=>(
                        <li className='page-item' key={num} onClick={()=>props.handleClick(num)}>
                            <a href='#' className='page-link'>{num}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination