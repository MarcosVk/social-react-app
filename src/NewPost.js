import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const NewPost = () => {
  const{postTitle,postBody,setPostTitle,setPostBody,HandleSubmit}=useContext(DataContext)
  return (
    <main>
        <form action="" className='newPostForm' onSubmit={HandleSubmit}>
          <label>Title:</label>
          <input 
          type="text"
          required
          value={postTitle}
          onChange={(e)=>setPostTitle(e.target.value)}
          />
          <label htmlFor="Body">Body:</label>
          <textarea 
          type="textarea"
          required
          value={postBody}
          onChange={(e)=>setPostBody(e.target.value)}
          />
          <button>Submit</button>
        </form>
    </main>
  )
}

export default NewPost