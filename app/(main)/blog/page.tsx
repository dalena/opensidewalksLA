import { Post } from "@/app/utils/interface";
import { getPosts } from "@/sanity/utils";
import React from "react";
import { Section } from "../../components/Section";
import PostCard from "../../components/PostCard";

const BlogPage = async () => {
  const posts: Post[] = await getPosts();

  return (
    <div className="">
      <Section sectionTitle="Blog" anchor="null">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          {posts.map((post) => (
            <PostCard key={post?._id} post={post} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default BlogPage;
