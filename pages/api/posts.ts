// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getPostMetadata from '@/components/getPostMetadata';

export default function handler(req, res) {
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
  res.status(200).json({ posts });
}
