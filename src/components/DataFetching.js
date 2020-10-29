import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);

  const [id, setId] = useState(1);
  const [post, setPost] = useState({});
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input
        type='text'
        value={id}
        onChange={(e) => setId(e.target.value)}
        name=''
        id=''
      />
      <button type='submit' onClick={handleClick}>
        Fetch Post
      </button>
      <div>POST - {post.title}</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
