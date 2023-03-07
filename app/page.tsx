import getPostMetadata from '@/components/getPostMetadata';
import { PostMetadata } from '@/components/PostMetadata';
import PostPreview from '@/components/PostPreview';

function getData(): PostMetadata[] {
  const postMetadata = getPostMetadata();
  const currentDate = new Date();
  const timezoneOffset = currentDate.getTimezoneOffset();
  currentDate.setMinutes(currentDate.getMinutes() - timezoneOffset);
  const posts = postMetadata
    .filter((obj) => {
      const objDate = new Date(obj.date);
      return objDate <= currentDate;
    })
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  return posts;
}

const HomePage = async () => {
  const posts = getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post) => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </div>
  );
};

export default HomePage;
