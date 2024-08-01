import { getPosts } from '@/sanity/utils';
import { Post } from '@/app/utils/interface';
import { Section } from './Section';
import PostCard from './PostCard';

export const revalidate = 60;

export default async function RecentPosts() {
    const posts: Post[] = await getPosts();
    const recentPosts = posts?.slice(0, 3);
    return (
        <Section
            sectionTitle='Recent News'
            anchor='recent'
        >
            <div className='flex flex-col md:flex-row gap-6 -translate-y-10'>
                {recentPosts?.length > 0 && recentPosts?.map((post) => (
                    <PostCard key={post?._id} post={post} />
                ))}
            </div>
        </Section>

    )
}