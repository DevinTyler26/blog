import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import getPostMetadata from '../../../components/getPostMetadata';
import getPostContent from '@/components/getPostContent';

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const BackButton = () => {
  return (
    <div className="mb-0 text-slate-600 text-xs hover:underline">
      <Link href="/">{'< Back'}</Link>
    </div>
  );
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const {
    data: { title, date, tags },
    content,
  } = getPostContent(slug);
  return (
    <div>
      <BackButton />

      <div className="text-center">
        <h1 className="text-2xl text-slate-600">{title}</h1>
        <p className="text-slate-400 my-2">{date}</p>
        <hr />
      </div>
      <article className="prose">
        <Markdown>{content}</Markdown>
      </article>
      <p className="text-slate-300 text-xs">Tags: {tags.join(', ')}</p>
      <BackButton />
    </div>
  );
};

export default PostPage;
