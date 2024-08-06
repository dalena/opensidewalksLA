import { Post } from "@/app/utils/interface";
import { getPosts } from "@/sanity/utils";
import React from "react";
import { Section } from "../components/Section";
import PostCard from "../components/PostCard";

const Blog = async () => {
  const posts: Post[] = await getPosts();

  return (
    <div className="">
      <Section sectionTitle="Blog" anchor="null">
        <div className="flex flex-col gap-14 md:flex-row md:gap-6">
          {posts.map((post) => (
            <PostCard key={post?._id} post={post} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blog;
