import { client } from '@/sanity/lib/client'

async function getPosts() {
    const query = `
 *[_type == "post"] {
  title,
  slug,
  publishedAt,
  excerpt,
}
 `;
    const data = await client.fetch(query);
    return data;
}

export default async function RecentPosts() {
    const post = await getPosts()
    return (
        <div>
            <h1>Recent Posts</h1>
        </div>
    )
}