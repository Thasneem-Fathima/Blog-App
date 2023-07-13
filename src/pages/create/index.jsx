import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { blogList } from '../../config/data';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

  const [postData, setPostData] = useState({
    title: '',
    category: '',
    subCategory: [],
    description: '',
  });

  const [tempSubCategory, setTempSubCategory] = useState('');
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTempSubCategoryChange = (e) => {
    setTempSubCategory(e.target.value);
  };

  const handleAddSubCategory = () => {
    if (tempSubCategory.trim() !== '') {
      setPostData((prevState) => ({
        ...prevState,
        subCategory: [...prevState.subCategory, tempSubCategory.trim()],
      }));
      setTempSubCategory('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPostId = blogList.length + 1;

    const newPost = {
      id: newPostId,
      title: postData.title,
      category: postData.category,
      subCategory: postData.subCategory,
      description: postData.description,
      authorName: 'Thasneem Fathima', 
      authorAvatar: 'https://tse4.mm.bing.net/th?id=OIP.zS6cyFGrPFd58ubHRrQSvgHaHa&pid=Api&P=0&h=180', 
      createdAt: 'July 11, 2023', 
      cover: 'https://tse1.mm.bing.net/th?id=OIP.0WSwZk0xz4jmE-WGeaBjzwHaEL&pid=Api&P=0&h=180',
      comments:['good','nice']
    };
    blogList.push(newPost);
    navigate('/')

  };

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Create New Post</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="postTitle">
        <Form.Label style={{ fontWeight: 'bold', fontSize: '18px', color: '#0f52ba'}}>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
            style={{
                border: '1px solid lightgrey',
                borderRadius: '5px',
                padding: '0.5rem',
                backgroundColor: '#f0f0f0',
              }}
          />
        </Form.Group>
        <br/>
        <Form.Group controlId="postCategory">
        <Form.Label style={{ fontWeight: 'bold', fontSize: '18px', color: '#0f52ba'}}>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={postData.category}
            onChange={handleChange}
            style={{
                border: '1px solid lightgrey',
                borderRadius: '5px',
                padding: '0.5rem',
                backgroundColor: '#f0f0f0',
              }}
          />
        </Form.Group>
        <br/>
        <Form.Group controlId="postSubCategory">
          <Form.Label style={{ fontWeight: 'bold', fontSize: '18px', color: '#0f52ba'}}>Subcategories</Form.Label>
          <InputGroup>
            <FormControl
              type="text"
              name="tempSubCategory"
              value={tempSubCategory}
              onChange={handleTempSubCategoryChange}
              style={{
                border: '1px solid lightgrey',
                borderRadius: '5px',
                padding: '0.5rem',
                backgroundColor: '#f0f0f0',
              }}
            />
              <Button variant="primary" onClick={handleAddSubCategory}>
                <FaPlus />
              </Button>
          </InputGroup>
        </Form.Group>
        {postData.subCategory.length > 0 && (
          <div>
            <h6>Added Tags:</h6>
            <ul>
              {postData.subCategory.map((subCat, index) => (
                <li key={index}>{subCat}</li>
              ))}
            </ul>
          </div>
        )}
        <br/>
        <Form.Group controlId="postDescription">
          <Form.Label style={{ fontWeight: 'bold', fontSize: '18px', color: '#0f52ba'}}>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={postData.description}
            onChange={handleChange}
            style={{
                border: '1px solid lightgrey',
                borderRadius: '5px',
                padding: '0.5rem',
                backgroundColor: '#f0f0f0',
              }}
          />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>

  );
};

export default CreatePost;
