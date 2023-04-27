import { PostMetadata } from '@/components/PostMetadata';
import PostPreview from '@/components/PostPreview';

async function getData(): Promise<{ posts: PostMetadata[] }> {
  const res = await fetch(`${process.env.NEXT_URL}/api/posts`, { next: { revalidate: 60 * 60 } });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const HomePage = async () => {
  const { posts } = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post) => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </div>
  );
};

export default HomePage;
