import { apiRequest } from '../../services/api/configuration';
import { transformer, VendorReturnType } from './transformer';

const urlVendors = 'restaurant/vendors-list';

const getApiVendors: () => Promise<VendorReturnType> = apiRequest<unknown, VendorReturnType>({
  url: urlVendors,
  responseTransformer: transformer,
});

export { getApiVendors };
