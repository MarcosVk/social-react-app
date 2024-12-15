import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext'


const PostPage = () => {
  const{ posts,HandleDelete }=useContext(DataContext)
  const { id } = useParams()
  const post = posts.find(post=>(post.id).toString() ===id);
  return (
    <article className='PostPage'>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
          <Link to={`/edit/${post.id}`}><button className='EditButton'>Edit</button></Link>
          <button className='deleteButton' onClick={()=>HandleDelete(post.id)}>Delete</button>
        </>) :


        (
          <>
            <h2>Missing 404 Not Found</h2>
            <p>lease return to Home Page</p>
            <Link to='/'>Visit Our Home Page</Link>
          </>
        )}

    </article>
  )
}

export default PostPage