import { useEffect, useRef, MutableRefObject } from 'react';

interface Params {
  root?: MutableRefObject<HTMLElement>;
  onIntersect?: () => void;
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

function useIntersection<TargetElement extends HTMLElement>({
    root,
    onIntersect,
    threshold = 0.7,
    rootMargin = '0px',
    enabled = true
  }: Params) {
  const onIntersectRef = useRef(onIntersect);
  const targetRef = useRef<TargetElement>(null);

  useEffect(() => {
    onIntersectRef.current = onIntersect;
  }, [onIntersect]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersectRef.current?.()),
      {
        root: root && root.current,
        rootMargin,
        threshold
      }
    );

    const el = targetRef.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [root, enabled, rootMargin, threshold]);

  return { targetRef };
}

export { useIntersection };