import { forwardRef } from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

const Link = forwardRef<HTMLAnchorElement, NextLinkProps>(
  function NextLinkComposed(props, ref) {
    const { children } = props;
    return (
      <NextLink
        {...props}
        ref={ref}
      >
        {children}
      </NextLink>
    );
  }
);

export { Link };
