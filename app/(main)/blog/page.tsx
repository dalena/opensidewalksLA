import { sanityFetch } from "@/sanity/lib/client";
import { postQuery } from "@/sanity/utils";
import { Post } from "@/app/utils/interface";
import React from "react";
import { Section } from "../../components/Section";
import PostCard from "../../components/PostCard";

export default async function BlogPage() {
  const posts: Post[] = await sanityFetch({
    query: postQuery,
    tags: ["post"],
  });

  return (
    <div className="">
      <Section sectionTitle="Blog" anchor="null">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post?._id} post={post} />
          ))}
        </div>
      </Section>
    </div>
  );
}
