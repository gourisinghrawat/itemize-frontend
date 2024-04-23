import "./BlogCard.css";

const BlogCard = ({ title, summary }) => {
  return (
    <div className="blog-card">
      <div className="group">
        <div className="background21" />
        <div className="title-parent">
          <b className="title9">{title}</b>
          <div className="summary1">{summary}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
