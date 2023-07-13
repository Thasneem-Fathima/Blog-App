import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');


  useEffect(() => {
    let selectedBlog = blogList.find((blog) => blog.id === parseInt(id));
    if (selectedBlog) {
      setBlog(selectedBlog);
      setComments(selectedBlog.comments);
    }
  }, [id]);

  const handleAddComment = (comment) => {
    const updatedBlog = {
      ...blog,
      comments: [...blog.comments, comment],
    };
    setBlog(updatedBlog);
    setComments(updatedBlog.comments);
    setNewComment(''); 
  };
  
  
  const handleCommentInputChange = (event) => {
    setNewComment(event.target.value);
  };
  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>

          <div className='comment-section'>
  <div className='comment-icon' onClick={handleToggleComments}>
    <FaComment style={{ fontSize: '24px' }} />
    <span style={{ fontSize: '20px' , color:'red'}}>...View comments</span> 
  </div>
  {showComments && (
    <div className='comment-list'>
      <h3>Comments:</h3>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
      <div className='comment-form'>
        <input
          type='text'
          placeholder='Add a comment'
          value={newComment}
          onChange={handleCommentInputChange}
        />

        <button type='button' onClick={() => handleAddComment(newComment)}>
          Add Comment
        </button>
      </div>
    </div>
  )}
</div>


        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
