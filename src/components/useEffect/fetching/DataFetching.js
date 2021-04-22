import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <ul>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
        <div>{post.title}</div>
        {/* {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default DataFetching;
