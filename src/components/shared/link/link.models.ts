import { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  className?: string;
}

export { LinkProps };