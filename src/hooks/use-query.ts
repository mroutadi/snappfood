import { useState, useCallback } from "react";
import useSWR from 'swr'
import {RequestKeys} from "../constants";
import {getNextPageNumber} from "../utils";

interface UseQueryProps {
  apiCall: () => void;
  apiData?: { [key: string]: any };
  onError?: (error: any) => void;
  onSuccess?: (data: any) => void;
  page?: number;
  itemsPerPage?: number;
  revalidateIfStale?: boolean;
  revalidateOnMount?: boolean;
  revalidateOnFocus?: boolean;
  revalidateOnReconnect?: boolean;
}

function useQuery(
  {
    apiCall,
    apiData,
    onError = () => {},
    onSuccess,
    page = 0,
    revalidateIfStale = false,
    revalidateOnMount = true,
    revalidateOnFocus = false,
    revalidateOnReconnect = false,
    itemsPerPage = 10
  }: UseQueryProps) {
  const [data, setData] = useState({
    items: [],
    currentPage: page,
    itemsPerPage,
    totalCount: 0
  });

  const fetchPage = useCallback(
    (n: number) => {
      setData(prevState => ({ ...prevState, currentPage: n }));
    },
    [setData]
  );
  const finalPageNumber = Math.ceil(data.totalCount / itemsPerPage);
  const nextPageNumber = getNextPageNumber(finalPageNumber, data.currentPage);

  const fetchNextPage = useCallback(() => {
    !!nextPageNumber && fetchPage(nextPageNumber)
  }, [fetchPage, nextPageNumber]);
  const fetcher = apiCall || (() => {});
  const apiParams = {
    ...apiData,
    [RequestKeys.page]: data.currentPage,
    [RequestKeys.pageSize]: data.itemsPerPage
  }
  const { error, isValidating: pending } = useSWR(apiParams, fetcher, {
    onError,
    onSuccess: (res) => {
      onSuccess?.(res);
      const { items, totalCount } = res;
      setData(prevState => ({
        ...prevState,
        totalCount,
        items: [
          ...prevState.items,
          ...items
        ]
      }));
    },
    revalidateIfStale,
    revalidateOnMount,
    revalidateOnFocus,
    revalidateOnReconnect,
    shouldRetryOnError: false
  });
  return {
    data,
    pending,
    hasError: !!error,
    fetchNextPage
  }
}

export { useQuery };