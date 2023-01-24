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

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const {
    data: { title, date },
    content,
  } = getPostContent(slug);
  return (
    <div>
      <div className="mb-0">
        <Link href="/">{'< Back'}</Link>
      </div>
      <div className="mb-12 text-center">
        <h1 className="text-2xl text-slate-600">{title}</h1>
        <p className="text-slate-400 mt-2">{date}</p>
      </div>
      <article className="prose">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
