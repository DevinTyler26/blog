'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = (props: { [x: string]: any; src: string; fallbackSrc?: string; alt: string }) => {
  const { src, fallbackSrc, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      alt={alt}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc ?? '/images/hero/no-image.jpg');
      }}
    />
  );
};

export default ImageWithFallback;
