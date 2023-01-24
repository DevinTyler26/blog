import fs from 'fs';
import matter from 'gray-matter';

import { PostMetadata } from './PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
    const {
      data: { title, date, subtitle },
    } = matter(fileContents);
    return {
      title,
      date,
      subtitle,
      slug: fileName.replace('.md', ''),
    };
  });
  return posts;
};

export default getPostMetadata;
