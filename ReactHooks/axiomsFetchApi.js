//after installing "npm install axios"

import React, {useState, useEffect} from 'react';

export default function App() {
const [posts, setPosts] = useState([]}

useEffect( () => {
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then( res => console.log(res)
          setPost(res.data))
     .then( err => console.log(data))
  }, [] )
  
  
  return (
    <div>
      <ul>
      {posts.map( post => ( <li key={post.id}> {post.title} </li>))}
      <ul>
    </div>
}
