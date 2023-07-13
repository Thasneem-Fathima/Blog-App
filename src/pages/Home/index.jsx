import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar/category';
import SearchBarTag from '../../components/Home/SearchBar/tag';
import { blogList } from '../../config/data';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');
  const [searchKeyTag, setSearchKeyTag] = useState('');
  
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };
  const handleSearchBarTag = (e) => {
    e.preventDefault();
    handleSearchResultsTag();
  };
  const handleSearchResultsTag = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) => {
      const subCategories = blog.subCategory.map((subCat) => subCat.toLowerCase().trim());
      return subCategories.some((subCat) => subCat.includes(searchKeyTag.toLowerCase().trim()));
    });
    setBlogs(filteredBlogs);
  };
  

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  const handleClearSearchTag = () => {
    setBlogs(blogList);
    setSearchKeyTag('');
  };

  const onchangetag=(e)=>{
    setSearchKey('');
    setSearchKeyTag(e.target.value);
  }
    

  return (
    <div>
      <Header />
      <div style={{ display: 'inline-flex', justifyContent: 'space-between' }}>
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      <SearchBarTag
        value={searchKeyTag}
        clearSearch={handleClearSearchTag}
        formSubmit={handleSearchBarTag}
        handleSearchKey={(e) => onchangetag(e)}
      /></div>
      <br/><br/>
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
