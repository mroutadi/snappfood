import {getApiVendors} from "../../api";
import {VendorsList} from "../../components/domains/vendors";
import {useQuery} from "../../hooks/use-query";

export default function Restaurant() {
  const {data} = useQuery({
    apiCall: getApiVendors,
    apiData: {
      lat: 35.730,
      long: 51.440
    }
  })
  return <div>
    <VendorsList vendors={data.items} />
  </div>
}