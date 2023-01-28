import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()).map((post) => <PostPreview key={post.slug} {...post} />);
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>;
};

export default HomePage;
