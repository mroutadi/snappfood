import {getApiVendors} from "../../api";
import {VendorsList} from "../../components/domains/vendors";
import {useQuery} from "../../hooks/use-query";
import { useIntersection } from "../../hooks/use-intersection";

export default function Restaurant() {
  const {data, fetchNextPage} = useQuery({
    apiCall: getApiVendors,
    apiData: {
      lat: 35.730,
      long: 51.440
    }
  });

  const { targetRef: VendorsListReference } = useIntersection<HTMLDivElement>({
    onIntersect: fetchNextPage,
    enabled: !!data.items.length,
    rootMargin: '50%'
  });

  return <div>
    <VendorsList vendors={data.items || []} />
    <div ref={VendorsListReference}>
    </div>
  </div>
}