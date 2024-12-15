import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext'

export const Home = () => {
  const {searchResult,fetchErr,isLoading}=useContext(DataContext)
  return (
    <main className='Home'>
      {(!isLoading && fetchErr&&<p style={{color:'red'}}>{fetchErr}</p>)}
      {(isLoading&&!fetchErr&&<p>Loading....</p>)}
      {(!isLoading&&!fetchErr&&searchResult.length)?(<Feed posts={searchResult}/>):(!isLoading && !fetchErr &&<p>Nothing to Display</p>)}
    </main>
    
  )
}
export default Home
