import React, { useEffect } from 'react'
import Post from './Post/Post'
import './Feed.css';
import { useSelector } from 'react-redux';
import { fetchPosts, selectFilteredPosts, setSearchTerm } from '../../store/redditSlice';
import { useDispatch } from 'react-redux';


function Feed() {

  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit]);

  if (isLoading) {
    return (
      <div>
        <h1>We're loading :)</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Failed to load posts</h2>
        <button type='button' onClick={() => dispatch(fetchPosts(selectedSubreddit))}>
          Try Again!
        </button>
      </div>
    )
  }

  if (posts.length === 0) {
    return ( 
      <div>
        <h2>Failed to find posts with seach "{searchTerm}"</h2>
        <button type='button' onClick={() => dispatch(setSearchTerm(''))}>
          Go Back 
          </button>
      </div>
    )
  }

  return ( 
    
    <div className='feed__container'>
          
      {posts.map((post) => (
        <Post 
          key={post.id}
          post={post}
        />
      ))}
     
    </div>
  )

 
}

export default Feed