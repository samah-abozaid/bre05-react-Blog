import articles from './articles.js';
import Post from './Post.jsx';

const Blog = ({ onSelect }) => {
  return (
    <div className="blog-grid">
      {articles.map(article => (
        <div className="card" key={article.id} onClick={() => onSelect(article)}>
         <span className="category">{article.category}</span>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
           <a  className="btn" onClick={() => article.onSelect(article)}>
            Lire la suite →
            </a>
        </div>
      ))}
    </div>
  );
};

export default Blog;
