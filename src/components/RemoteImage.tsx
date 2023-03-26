import React, { useState } from 'react';
import type { ApiComponents } from '@jambff/oac';
import NextImage from 'next/image';
import { ImagePlaceholder } from './ImagePlaceholder';

type ResizeMode = 'cover' | 'contain';

type RemoteImageProps = {
  image?: ApiComponents['Media'];
  aspectRatio?: number;
  maxWidth: number;
  objectFit?: ResizeMode;
  sizes?: string;
};

type RemoteImageDimensions = {
  width: number;
  height: number;
};

export type RemoteImageResizedUriOptions = {
  aspectRatio?: number;
  maxWidth: number;
  resizeMode?: ResizeMode;
};

/**
 * Get the image aspect ratio.
 */
const getAspectRatio = (
  image?: ApiComponents['Media'],
  aspectRatio?: number,
): number => {
  const w = Number(image?.width);
  const h = Number(image?.height);

  // If a specific aspect ratio was given, use that.
  if (aspectRatio && Number.isFinite(aspectRatio)) {
    return aspectRatio;
  }

  // Otherwise attempt to calculate from the width and height.
  if (Number.isFinite(w) && Number.isFinite(h)) {
    return h / w;
  }

  // Fallback to a landscape default.
  return 2 / 3;
};

/**
 * Get the image dimensions, based on an aspect ratio and max width.
 */
const getDimensions = (
  maxWidth: number,
  image?: ApiComponents['Media'],
  aspectRatio?: number,
): RemoteImageDimensions => {
  const ratio = getAspectRatio(image, aspectRatio);

  return {
    width: maxWidth,
    height: Math.round(maxWidth * ratio),
  };
};

export const RemoteImage = ({
  image,
  aspectRatio,
  maxWidth,
  objectFit = 'contain',
  sizes,
}: RemoteImageProps) => {
  const [hasError, setHasError] = useState(false);
  const imageDimensions = getDimensions(maxWidth, image, aspectRatio);

  return (
    <div className="relative" style={{ aspectRatio: '3 / 2' }}>
      {!image?.src || hasError ? (
        <ImagePlaceholder
          width={imageDimensions.width}
          height={imageDimensions.height}
        />
      ) : (
        <NextImage
          fill
          alt={image.title}
          onError={(err) => {
            // eslint-disable-next-line no-console
            console.error(err);

            setHasError(true);
          }}
          style={{ objectFit, width: '100%', aspectRatio: '3 / 2' }}
          src={image.src}
          sizes={sizes}
        />
      )}
    </div>
  );
};
