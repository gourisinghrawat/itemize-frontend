import BlogCard from "./BlogCard";
import "./PostBlog.css";

const PostBlog = () => {
  return (
    <div className="post-blog">
      <div className="rectangle17" />
      <div className="blog-card-feature">
        <div className="background22" />
        <h1 className="title10">
          Welcome to Itemize: Streamline Your Supply Chain
        </h1>
        <img className="media-icon" loading="lazy" alt="" src="/media@2x.png" />
        <div className="author">Author name</div>
      </div>
      <div className="blog-card-parent">
        <BlogCard
          title="Efficient Inventory Management"
          summary="With Itemize, you can easily manage your inventory in real-time"
        />
        <BlogCard
          title="Seamless Collaboration"
          summary="Connect with your suppliers and distributors seamlessly through our platform...."
        />
      </div>
    </div>
  );
};

export default PostBlog;
