import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { PostMetadata } from './PostMetadata';

const PostPreview = (props: PostMetadata) => {
  let imagePath = `/images/hero/${props.slug}.jpg`;
  if (fs.existsSync(`public/${imagePath}`)) {
  } else {
    imagePath = '/images/hero/no-image.jpg';
  }
  return (
    <Link
      href={`/posts/${props.slug}`}
      className="border border-slate-300 rounded-md shadow-sm bg-white group transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-102 hover:shadow-lg hover:rounded-xl hover:transition-all duration-200 overflow-hidden"
    >
      <Image src={imagePath} alt={`hero image ${props.slug}`} width={700} height={400} className="object-cover" blurDataURL="/images/hero/no-image.jpg" placeholder="blur" />
      <div className="p-4">
        <h2 className="text-green-600">{props.title}</h2>
        <hr className="" />
        <p className="text-slate-400 text-xs mb-4">{dayjs(props.date).format('MMM D, YYYY')}</p>
        <p className="text-slate-700 text-sm">{props.subtitle}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
