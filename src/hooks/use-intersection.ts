import { useEffect, useRef } from 'react';

interface Params {
  onIntersect?: () => void;
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

function useIntersection<TargetElement extends HTMLElement>({
    onIntersect,
    threshold = 0.7,
    rootMargin = '0px',
    enabled = true
  }: Params) {
  const onIntersectRef = useRef(onIntersect);
  const targetRef = useRef<TargetElement>();

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
        rootMargin: rootMargin as string,
        threshold: threshold as number | number[]
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
  }, [enabled, rootMargin, threshold]);

  return { targetRef };
}

export { useIntersection };