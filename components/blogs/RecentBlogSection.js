import { useRef } from "react";
import { ArrowLeft } from "../Icons";
import RecentBlogs from "./RecentBlogs";

const RecentBlogSection = ({ posts }) => {
  return (
    <div className="py-24 text-center">
      <div className="container px-6 md:px-0 xl:px-12 mx-auto">
        <h2 className="text-blackAlt font-bold text-3xl md:text-5xl">
          Most Popular Blogs
        </h2>
        <h3 className="text-blackAlt font-normal mt-3">
          Read our Most Popular blogs written by experts and loved by the
          community
        </h3>
      </div>
      {posts.length ? <RecentBlogs posts={posts} /> : <></>}
    </div>
  );
};

export default RecentBlogSection;
