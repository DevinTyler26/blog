import getPostContent from '@/components/getPostContent';

export default function Head(props: any) {
  const slug = props.params.slug;
  const {
    data: { title, subtitle },
  } = getPostContent(slug);
  const siteTitle = `Devin's Plant Blog`;
  return (
    <>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={subtitle} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={subtitle} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      {/* <meta property="twitter:creator" content={config.social.twitter} /> */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={subtitle} />
      <meta property="og:image" content={`/images/hero/${slug}.png`} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
