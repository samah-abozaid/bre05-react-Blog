const Post = ({ data }) => {
  return (
    <article className="article-detail">
      <span className="category">{data.category}</span>
      <h2>{data.title}</h2>
      <p className="date">Publié le {data.date}</p>
      <hr/>
      <p>{data.excerpt}</p>
      <p>{data.content}</p>
    </article>
  );
};

export default Post;
