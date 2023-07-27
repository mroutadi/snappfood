import {useState} from "react";
import useSWR from 'swr'

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
    page = 1,
    revalidateIfStale = false,
    revalidateOnMount = true,
    revalidateOnFocus = false,
    revalidateOnReconnect = false,
    itemsPerPage = 10
  }: UseQueryProps) {
  const [data, setData] = useState({
    items: [],
    pagination: {
      currentPage: page,
      itemsPerPage,
      totalCount: 0
    }
  });

  const fetcher = apiCall || (() => {});

  const { error, isValidating: pending } = useSWR(apiData, fetcher, {
    onError,
    onSuccess: (res) => {
      onSuccess?.(res);
      const { items, totalCount } = res;
      setData(prevState => ({
        items,
        pagination: {
          ...prevState.pagination,
          totalCount
        }
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
  }
}

export { useQuery };