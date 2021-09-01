import BlogNewsletter from "./BlogNewsletter";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlogs = ({ posts }) => {
  return (
    <div className="container px-4 md:px-0 xl:px-12 mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {posts.length &&
        posts.map((post, idx) => <RecentBlogCard key={idx} post={post} />)}
      <BlogNewsletter className="col-span-1 md:col-span-2" />
    </div>
  );
};

export default RecentBlogs;
