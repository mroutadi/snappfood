import { ReactElement } from 'react';
import { default as NextImage } from 'next/image';
import { ImageProps } from './image.models';

function Image(
  {
    src,
    alt,
    height,
    width,
    style,
    layout,
    className,
    radius = 0,
    objectFit = 'cover',
    ...props
  }: ImageProps): ReactElement {

  return (
    <NextImage
      {...props}
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      className={className}
      objectFit={objectFit}
      style={{
        borderRadius: `${radius}px`,
      }}
    />
  );
}

export { Image };
