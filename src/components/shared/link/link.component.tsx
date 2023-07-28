import { forwardRef } from 'react';
import { default as NextLink } from 'next/link';
import { LinkProps } from './link.models';

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  function NextLinkComposed(props, ref) {
    const { children, className } = props;
    return (
      <NextLink
        {...props}
        className={className}
        ref={ref}
      >
        {children}
      </NextLink>
    );
  }
);

export { Link };
