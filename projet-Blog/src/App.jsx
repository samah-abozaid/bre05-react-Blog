import { useState } from "react";
import Blog from "./Blog.jsx";
import Post from "./Post.jsx";
import './App.css';

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (selectedArticle) {
    return (
      <div>
        <button onClick={() => setSelectedArticle(null)}>← Retour au Blog</button>
        <Post data={selectedArticle} />
      </div>
    );
  }

  return <Blog onSelect={setSelectedArticle} />;
}

export default App;
