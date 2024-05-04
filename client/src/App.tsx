import { useState, useEffect } from "react";

export const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("http://localhost:3001/api/contacts");
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>App</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};
