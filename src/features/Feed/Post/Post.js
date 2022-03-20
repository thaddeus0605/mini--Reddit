import React from 'react'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import PersonIcon from '@mui/icons-material/Person';
import CommentIcon from '@mui/icons-material/Comment';

import './Post.css'

function Post(props) {

    const post = props;
    const {title, url, author, created_utc, num_comments} = post;
return (
    <article key={post.id}>
        <div className='post__container'>
        <div className='post__votes'>
            <ArrowUpwardOutlinedIcon className='post__arrow' />
            <p>355</p>
            <ArrowDownwardOutlinedIcon className='post__arrow' />
        </div>
        <div className='post__card'>
            <div className='post__title'>
                <h3>{title}</h3>
            </div>
            <div className='post__body'>
                <div className='post__image'>
                    <img src={url} alt="" />
                </div>
                <div className='post__info'>
                    <div className='post__author'>
                        <PersonIcon />
                        <p>{author}</p>
                    </div>
                    <div className='post__time'>
                        <p>{created_utc}</p>
                    </div> 
                    <div className='post__comments'>
                        <CommentIcon />
                        <p>{num_comments}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </article>
  )
    

}

export default Post