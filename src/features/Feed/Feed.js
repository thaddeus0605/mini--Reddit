import React from 'react'
import Post from './Post/Post'
import './Feed.css';

function Feed() {
  return (
    <div className='feed__container'>
        <Post 
            title="Tom Henderson: Star Wars Eclipse update later this week"
            votes="355"
            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehIidIV30u-xcBAz9FrulI7WNNDYmt1_Mrg&usqp=CAU"
            author="user4269"
            time="13 hours ago"
            commentsNum="400"
        />
         <Post 
            title="Tom Henderson: Star Wars Eclipse update later this week"
            votes="355"
            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehIidIV30u-xcBAz9FrulI7WNNDYmt1_Mrg&usqp=CAU"
            author="user42069"
            time="13 hours ago"
            commentsNum="400"
        />
    </div>
  )
}

export default Feed