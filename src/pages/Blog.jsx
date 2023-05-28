import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogPost, setBlogPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => {
        // Handle the response data
        console.log(response.data.posts);
        if (response.data.posts) {
          setBlogPost(response.data.posts);
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1>Blog articles</h1>
      {
        <ol>
          {blogPost.map((item, index) => (
            <li key={Math.random()}>
              <Link to={item.id}>{item.title}</Link>
            </li>
          ))}
        </ol>
      }
      <Link to="/">Back</Link>
    </div>
  );
};

export default Blog;
