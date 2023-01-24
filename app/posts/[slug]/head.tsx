import getPostContent from '@/components/getPostContent';

export default function Head(props: any) {
  const slug = props.params.slug;
  const {
    data: { title },
  } = getPostContent(slug);
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
