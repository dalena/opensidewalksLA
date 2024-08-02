import { getPosts } from "@/sanity/utils";
import { Post } from "@/app/utils/interface";
import { Section } from "./Section";
import PostCard from "./PostCard";

export const revalidate = 60;

export default async function RecentPosts() {
  const posts: Post[] = await getPosts();
  const recentPosts = posts?.slice(0, 3);
  return (
    <Section sectionTitle="Recent News" anchor="recent">
      <div className="flex -translate-y-10 flex-col gap-14 md:flex-row md:gap-6">
        {recentPosts?.length > 0 &&
          recentPosts?.map((post) => <PostCard key={post?._id} post={post} />)}
      </div>
    </Section>
  );
}
