import React, {useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import DataContext from './context/DataContext';

const EditPost = () => {
  const{posts,editTitle,editBody,HandleEdit,setEditTitle,setEditBody}=useContext(DataContext)
    const {id}=useParams();
    const post=posts.find(post=>parseInt((post.id))===parseInt(id))
    useEffect(()=>{
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post,setEditTitle,setEditBody])
  return (
    <main>
        {post &&
        <>
        <h2>Edit Post</h2>
         <form action="" className='editPostForm' onSubmit={(e)=>e.preventDefault()}>
          <label>Title:</label>
          <input 
          type="text"
          required
          value={editTitle}
          onChange={(e)=>setEditTitle(e.target.value)}
          />
          <label htmlFor="Body">Body:</label>
          <textarea 
          type="textarea"
          required
          value={editBody}
          onChange={(e)=>setEditBody(e.target.value)}
          />
          <button onClick={()=>{HandleEdit(post.id)}}>Submit</button>
        </form></>}
        {!post &&
        <>
        <h2>Missing 404 Not Found</h2>
            <p>lease return to Home Page</p>
            <Link to='/'>Visit Our Home Page</Link>
        </>}
    </main>
  )
}

export default EditPost