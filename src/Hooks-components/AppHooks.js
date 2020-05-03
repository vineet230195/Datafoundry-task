import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostTable from './Posts'
import Pagination from './Pagination'


function Table(){

    const [posts,setPosts]=useState([])
    const [loading,setLoading]=useState(false)
    const [currentPage,setCurrentPage]=useState(1)
    const [PostPerPage,]=useState(10)

    useEffect(()=>{
        const fetchPosts=async ()=>{
            const res= await axios.get(`http://jsonplaceholder.typicode.com/posts`)
            setPosts(res.data)
            setLoading(false)
        }

        fetchPosts()
    },[])


    const indexOfLastPost=currentPage*PostPerPage
    const indexOfFirstPost=indexOfLastPost-PostPerPage
    const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)

    const handleClick=(num)=> setCurrentPage(num)

    return(
        <div className='container'>
            <h1 className='display-5 text-center'>Post Table</h1>
            <PostTable posts={currentPosts} loading={loading}/>
            <Pagination postPerPage={PostPerPage} totalPosts={posts.length} handleClick={handleClick}/>
        </div>
    )
}

export default Table