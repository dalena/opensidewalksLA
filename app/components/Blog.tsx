import { sanityFetch } from "@/sanity/lib/client";
import { postQuery } from "@/sanity/utils";
import { Post } from "@/app/utils/interface";
import { Section } from "./Section";
import PostCard from "./PostCard";
import Button from "./Button";

export default async function Blog() {
  const posts: Post[] = await sanityFetch({
    query: postQuery,
    tags: ["post"],
  });
  const recentPosts = posts?.slice(0, 6);

  return (
    <Section sectionTitle="Blog" anchor="blog">
      <div className="grid -translate-y-10 grid-cols-1 gap-14 md:grid-cols-3 md:gap-6">
        {recentPosts?.length > 0 &&
          recentPosts?.map((post) => <PostCard key={post?._id} post={post} />)}
      </div>
      <div className="translate-y-10">
        <Button text="More Blog Posts" link="/blog" />
      </div>
    </Section>
  );
}
