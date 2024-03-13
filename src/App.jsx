import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

// fake data chatGpt search: give me five data: Id, cover, title, author, author_img, posted_date, reading_time, hashtags json format

function App() {


  return (
    <>
     
      <Header></Header>
      <div className='md:flex'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
      </div>
 
    </>
  )
}

export default App
