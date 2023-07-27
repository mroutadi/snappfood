import { CSSProperties } from "react";

interface ImageProps {
  src: string;
  alt: string;
  radius?: number;
  className?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  style?: CSSProperties;
  objectFit?: 'cover' | 'contain';
  layout?: 'fill' | 'fixed' | 'responsive';
}

export { ImageProps }
