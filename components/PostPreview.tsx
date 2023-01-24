import Link from 'next/link';
import { PostMetadata } from './PostMetadata';

const PostPreview = (props: PostMetadata) => {
  return (
    <Link
      href={`/posts/${props.slug}`}
      className="border border-slate-300 p-4 rounded-md shadow-sm bg-white group transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-102 hover:shadow-lg hover:rounded-xl hover:transition-all duration-200"
    >
      <h2 className="text-green-600">{props.title}</h2>
      <p className="text-sm text-slate-400">{props.date}</p>
      <hr className="mb-4" />
      <p className="text-slate-700 text-sm">{props.subtitle}</p>
    </Link>
  );
};

export default PostPreview;
