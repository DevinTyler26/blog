import { PostMetadata } from '@/components/PostMetadata';
import PostPreview from '@/components/PostPreview';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/postMetadata`, { next: { revalidate: 600 } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const HomePage = async () => {
  const { data } = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((post: PostMetadata) => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </div>
  );
};

export default HomePage;
